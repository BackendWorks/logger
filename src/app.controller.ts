import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('logger_info')
  public loggerInfo(@Payload() payload): void {
    this.appService.logger.info(payload);
  }

  @EventPattern('logger_debug')
  public loggerDebug(@Payload() payload): void {
    this.appService.logger.debug(payload);
  }

  @EventPattern('logger_error')
  public loggerError(@Payload() payload): void {
    this.appService.logger.error(payload);
  }

  @EventPattern('logger_warn')
  public loggerWarn(@Payload() payload): void {
    this.appService.logger.warn(payload);
  }
}
