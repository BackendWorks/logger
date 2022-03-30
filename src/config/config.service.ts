import { config } from 'dotenv';
config();
import { Injectable } from '@nestjs/common';
@Injectable()
export class ConfigService {
  private config: { [key: string]: any } = {};
  constructor() {
    this.config.env = process.env.NODE_ENV;
    this.config.logger_host = process.env.LOGGER_HOST;
    this.config.rb_url = process.env.RABBITMQ_URL;
    this.config.logger_queue = process.env.RABBITMQ_LOGGER_QUEUE;
  }

  public get(key: string): any {
    return this.config[key];
  }
}
