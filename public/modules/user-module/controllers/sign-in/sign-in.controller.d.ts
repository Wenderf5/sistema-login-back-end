import { SignInService } from '../../services/sign-in/sign-in.service';
import { UserDto } from './dto/user-dto/user-dto';
import { Response } from 'express';
export declare class SignInController {
    private readonly sign_in_service;
    constructor(sign_in_service: SignInService);
    SignIn(body: UserDto, res: Response): Promise<Response>;
}
