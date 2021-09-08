import { Body, Delete, HttpStatus, Post } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Arrear } from './arrear.entity';
import { ArrearService } from './arrear.service';

@Controller('arrears')
export class ArrearController {
    constructor(
        private arrearService: ArrearService,
        private userService: UserService
    ) {

    }

    @Get()
    async getAllArrears() {
        return this.arrearService.all();
    }

    @Post()
    async create(@Body() arrear: Arrear) {
        const existUser = await this.userService.existUser(arrear.userId);
        if (!existUser) {
            throw new HttpException('User no exists', HttpStatus.BAD_REQUEST);
        }
        return this.arrearService.create(arrear);
    }

    @Get(':id')
    async getArrear(@Param('id') id: number) {
        return this.arrearService.get(id);
    }

    @Put(':id')
    async updateArrear(@Param('id') id: number, @Body() arrear: Arrear) {
        return this.arrearService.update(id, arrear);
    }

    @Delete(':id')
    async deleteArrear(@Param('id') id: number) {
        return this.arrearService.delete(id);
    }
}
