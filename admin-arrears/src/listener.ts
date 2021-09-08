import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(
        AppModule,
        {
            transport: Transport.RMQ,
            options: {
                urls: ['amqps://myiggokx:1M2zaXa11FdXITp3Eknv58ciK1c5-kOr@codfish.rmq.cloudamqp.com/myiggokx'],
                queue: 'test_queue',
                queueOptions: {
                    durable: false
                },
            },
        },
    );
    await app.listen();
    
    
}
bootstrap();
