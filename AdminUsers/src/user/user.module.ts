import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        ClientsModule.register([
            {
                name: 'USER_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqps://myiggokx:1M2zaXa11FdXITp3Eknv58ciK1c5-kOr@codfish.rmq.cloudamqp.com/myiggokx'],
                    queue: 'test_queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ]),
    ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
