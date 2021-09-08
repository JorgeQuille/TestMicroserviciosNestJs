import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Arrear } from './arrear.entity';

@Injectable()
export class ArrearService {
    constructor(
        @InjectRepository(Arrear) private readonly arrearRepository: Repository<Arrear>
    ) {

    }
    async all(): Promise<Arrear[]> {
        return this.arrearRepository.find();
    }

    async create(arrear: Arrear): Promise<Arrear> {
        return this.arrearRepository.save(arrear);
    }

    async get(id: number): Promise<Arrear> {
        return this.arrearRepository.findOne(id);
    }

    async update(id: number, user: Arrear): Promise<any> {
        return this.arrearRepository.update(id, user);
    }
    async delete(id: number): Promise<any> {
        return this.arrearRepository.delete(id);
    }
}
