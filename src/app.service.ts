import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import * as path from 'path';

@Injectable()
export class AppService {
  logger: winston.Logger;
  constructor() { 
    this.logger = winston.createLogger({
      level: 'debug',
      transports: [
        new winston.transports.File({
          filename: path.join(__dirname, '../serivces.log'),
          format: winston.format.combine(
            winston.format.errors({ stack: true }),
            winston.format.metadata(),
            winston.format.json(),
            winston.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss',
            }),
          )
        }),
        new winston.transports.Console({
          handleExceptions: true,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.metadata({ fillExcept: ['timestamp', 'service', 'level', 'message'] }),
            winston.format.colorize(),
            this.winstonConsoleFormat(),
          )
        })
      ],
      exitOnError: false,
    })
  }

  winstonConsoleFormat() {
    return winston.format.printf(({ timestamp, level, message, metadata }) => {
      const metadataString = metadata != null ? JSON.stringify(metadata) : '';
      return `[${timestamp}][${level}] ${message}. ${'metadata: ' + metadataString}`;
    })
  }
}
