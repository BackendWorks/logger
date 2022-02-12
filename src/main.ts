import 'source-map-support/register';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`${configService.get('rb_url')}`],
        queue: `${configService.get('logger_queue')}`,
        queueOptions: { durable: false },
      },
    },
  );

  await app.listen();
  console.log('🚀 Logger service started');
}
bootstrap();