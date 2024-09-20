import { HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from '../../controllers/sign-in/dto/user-dto/user-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/dataBase/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Injectable()
export class SignInService {
    constructor(
        @InjectRepository(User)
        private user_repository: Repository<User>,
        private config: ConfigService
    ) { }

    async signIn(body: UserDto, res: Response): Promise<Response> {
        const userdb = await this.user_repository.findOne({
            where: {
                user_name: body.user_name
            }
        });
        if (!userdb) {
            return res.status(HttpStatus.NOT_FOUND).send();
        }
        const login = await bcrypt.compare(body.password, userdb.password);
        if (login === true) {
            const token = jwt.sign({ user_name: userdb.user_name }, this.config.get('JWT_SECRET'));
            return res.cookie('auth_token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
            }).status(HttpStatus.OK).send();
        } else {
            return res.status(HttpStatus.UNAUTHORIZED).send();
        }
    }
}
