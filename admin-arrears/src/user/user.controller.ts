import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { IUser } from './user.interface';

@Controller('user')
export class UserController {
    @EventPattern('findId_User')
    async existUser(data: boolean) {
        return data;
    }
}
