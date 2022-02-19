import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
const ecsFormat = require('@elastic/ecs-winston-format');
@Injectable()
export class AppService {
  public logger: winston.Logger;
  constructor() {
    this.logger = winston.createLogger({
      level: 'debug',
      format: ecsFormat(),
      transports: [
        new winston.transports.File({
          dirname: 'logs',
          handleExceptions: true,
          filename: `combined.log`,
        }),
        new winston.transports.Console({
          handleExceptions: true,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.metadata({
              fillExcept: ['timestamp', 'service', 'level', 'message'],
            }),
            winston.format.colorize(),
          ),
        }),
      ],
      exitOnError: false,
    });
  }
}
