import { Body, Delete, Get, Inject } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(
        private userService: UserService,
        @Inject('USER_SERVICE') private readonly clientProxy: ClientProxy
    ) {

    }
    @Get()
    async getAllUsers() {
        
        return this.userService.all();
    }

    @Post()
    async create(@Body() user: User) {
        return this.userService.create(user);
    }

    @Get(':id')
    async getUser(@Param('id') id: number) {
        const user = await this.userService.get(id);
        //this.clientProxy.emit('findId_User', user);
        return user;
    }

    @Get('exists/:id')
    async existUser(@Param('id') id: number) {
        const user = await this.userService.exists(id);
        this.clientProxy.emit('findId_User', user);
        return user;
    }


    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() user: User) {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return this.userService.delete(id);
    }

}
