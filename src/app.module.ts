import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { stdTimeFunctions } from 'pino';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        pinoHttp: {
          timestamp: stdTimeFunctions.isoTime,
          level: configService.get('env') !== 'production' ? 'debug' : 'info',
          transport: configService.get('env') !== 'production'
          ? { target: 'pino-pretty' }
          : undefined,
          useLevelLabels: true,
        },
      }),
      inject: [ConfigService]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
