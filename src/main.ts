import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    cors: appConfig.nodeEnv === 'development',
  });

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.enableShutdownHooks();

  await app.listen(appConfig.port);
}

void bootstrap();
