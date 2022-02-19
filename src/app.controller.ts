import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    this.appService.logger.info('Logger controller successfully started!');
  }

  @EventPattern('info')
  public loggerInfo(@Payload() payload): void {
    this.appService.logger.info(payload);
  }

  @EventPattern('debug')
  public loggerDebug(@Payload() payload): void {
    this.appService.logger.debug(payload);
  }

  @EventPattern('error')
  public loggerError(@Payload() payload): void {
    this.appService.logger.error(payload);
  }

  @EventPattern('warn')
  public loggerWarn(@Payload() payload): void {
    this.appService.logger.warn(payload);
  }
}
