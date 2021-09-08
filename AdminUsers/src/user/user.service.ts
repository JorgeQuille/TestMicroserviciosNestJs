import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async all(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(userData): Promise<User> {
        return this.userRepository.save(userData);
    }

    async get(id: number): Promise<User> {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new HttpException('User no exists', HttpStatus.BAD_REQUEST);
        }
        return user;
    }

    async exists(id: number): Promise<boolean> {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            return false
        }
        return true;
    }

    async update(id: number, user: User): Promise<any> {
        const temp = await this.userRepository.findOne(id);
        if (!temp) {
            throw new HttpException('User no exists', HttpStatus.BAD_REQUEST);
        }
        user.id = id;
        return  await this.userRepository.update(id, user);
    }

    async delete(id: number): Promise<any> {
        const temp = await this.userRepository.findOne(id);
        if (!temp) {
            throw new HttpException('User no exists', HttpStatus.BAD_REQUEST);
        }
        return await this.userRepository.delete(id);
    }

}
