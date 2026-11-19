import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { HealthModule } from './modules/health/health.module';
import { publicPath } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: publicPath,
      exclude: ['/api/(.*)'],
    }),
    HealthModule,
  ],
})
export class AppModule {}
