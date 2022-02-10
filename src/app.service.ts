import { Injectable } from '@nestjs/common';
import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(
    @InjectPinoLogger(AppService.name) private readonly logger: PinoLogger,
  ) {}

  trace(message: string) {
    this.logger.trace(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  info(message: string) {
    this.logger.info(message);
  }

  error(error: any) {
    this.logger.error({ error: new Error(error) });
  }

  fatal(message: string) {
    this.logger.fatal(message);
  }


}
