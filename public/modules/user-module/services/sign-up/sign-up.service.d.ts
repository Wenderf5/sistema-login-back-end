import { HttpStatus } from '@nestjs/common';
import { User } from 'src/dataBase/entities/user.entity';
import { Repository } from 'typeorm';
import { NewUserDto } from '../../controllers/sign-up/dto/new-user-dto/new-user-dto';
export declare class SignUpService {
    private user_repository;
    constructor(user_repository: Repository<User>);
    newUser(newUser: NewUserDto): Promise<HttpStatus>;
}
