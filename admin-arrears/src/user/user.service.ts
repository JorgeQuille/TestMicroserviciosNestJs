import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { timeout } from 'rxjs';

@Injectable()
export class UserService {

    constructor(
        private httpService: HttpService
    ) { }

    async existUser(id: number): Promise<boolean> {
        let aux1;
        this.httpService.get('http://localhost:3000/api/users/exists/' + id, {}).subscribe(res => {
            aux1 = res.data;
        });
        return new Promise(function (resolve, reject) {
            setTimeout(() => { resolve(aux1); }, 100);
        });
    }
}
