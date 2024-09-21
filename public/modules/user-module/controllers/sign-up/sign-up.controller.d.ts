import { HttpStatus } from '@nestjs/common';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { NewUserDto } from './dto/new-user-dto/new-user-dto';
export declare class SignUpController {
    private readonly sign_up_service;
    constructor(sign_up_service: SignUpService);
    newUser(body: NewUserDto): Promise<HttpStatus>;
}
