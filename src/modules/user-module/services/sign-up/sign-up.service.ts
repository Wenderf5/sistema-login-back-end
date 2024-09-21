import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../dataBase/entities/user.entity';
import { Repository } from 'typeorm';
import { NewUserDto } from '../../controllers/sign-up/dto/new-user-dto/new-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignUpService {
    constructor(
        @InjectRepository(User)
        private user_repository: Repository<User>
    ) { }

    async newUser(newUser: NewUserDto): Promise<HttpStatus> {
        try {
            await this.user_repository.save({
                user_name: newUser.user_name,
                password: await bcrypt.hash(newUser.password, 10)
            });
            return HttpStatus.CREATED;
        } catch (error) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}