import { Controller, Get } from '@nestjs/common';
import { appConfig } from '../../config/app.config';

@Controller('health')
export class HealthController {
  @Get()
  check(): Record<string, unknown> {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: appConfig.nodeEnv,
    };
  }
}
