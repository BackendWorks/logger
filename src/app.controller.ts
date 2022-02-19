import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    this.appService.logger.info('Logger controller successfully started!');
  }

  @EventPattern('info')
  public loggerInfo(@Payload() data): void {
    const log = JSON.parse(data);
    this.appService.logger.info(log.message);
  }

  @EventPattern('debug')
  public loggerDebug(@Payload() data): void {
    const log = JSON.parse(data);
    this.appService.logger.debug(log.message);
  }

  @EventPattern('error')
  public loggerError(@Payload() data): void {
    const log = JSON.parse(data);
    this.appService.logger.error(log.message);
  }

  @EventPattern('warn')
  public loggerWarn(@Payload() data): void {
    const log = JSON.parse(data);
    this.appService.logger.warn(log.message);
  }
}
