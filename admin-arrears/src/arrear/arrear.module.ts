import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { ArrearController } from './arrear.controller';
import { Arrear } from './arrear.entity';
import { ArrearService } from './arrear.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Arrear]), HttpModule
    ],
    controllers: [ArrearController],
    providers: [ArrearService, UserService]
})
export class ArrearModule {}
