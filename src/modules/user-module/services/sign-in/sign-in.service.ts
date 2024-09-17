import { HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from '../../controllers/sign-in/dto/user-dto/user-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/dataBase/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SignInService {
    constructor(
        @InjectRepository(User)
        private user_repository: Repository<User>,
        private config: ConfigService
    ) { }

    async signIn(user: UserDto): Promise<HttpStatus | {
        code: HttpStatus,
        token: string;
    }> {
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
            const token = await jwt.sign({ user_name: userdb.user_name }, this.config.get('JWT_SECRET'));
            return {
                code: HttpStatus.OK,
                token: token
            };
        } else {
            return HttpStatus.UNAUTHORIZED;
        }
    }
}
