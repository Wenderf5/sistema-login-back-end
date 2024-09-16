import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/dataBase/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignUpService {
    constructor(
        @InjectRepository(user)
        private user_repository: Repository<user>
    ) { }

    async newUser(): Promise<HttpStatus> {
        try {
            await this.user_repository.save({
                user_name: "fabiano",
                password: "123"
            });
            return HttpStatus.CREATED;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
