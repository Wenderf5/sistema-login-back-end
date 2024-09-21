import { UserDto } from '../../controllers/sign-in/dto/user-dto/user-dto';
import { User } from 'src/dataBase/entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
export declare class SignInService {
    private user_repository;
    private config;
    constructor(user_repository: Repository<User>, config: ConfigService);
    signIn(body: UserDto, res: Response): Promise<Response>;
}
