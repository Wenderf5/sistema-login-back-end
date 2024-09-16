import { HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from '../../controllers/sign-in/dto/user-dto/user-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/dataBase/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignInService {
    constructor(
        @InjectRepository(User)
        private user_repository: Repository<User>
    ) { }

    async signIn(user: UserDto): Promise<HttpStatus> {
        const userdb = await this.user_repository.findOne({
            where: {
                user_name: user.user_name
            }
        });
        if (!userdb) {
            return HttpStatus.NOT_FOUND;
        }
        const login = await bcrypt.compare(user.password, userdb.password);
        if (login === true) {
            return HttpStatus.OK;
        } else {
            return HttpStatus.UNAUTHORIZED;
        }
    }
}
