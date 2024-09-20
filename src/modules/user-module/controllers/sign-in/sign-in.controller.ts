import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { SignInService } from '../../services/sign-in/sign-in.service';
import { UserDto } from './dto/user-dto/user-dto';
import { Response } from 'express';

@Controller()
export class SignInController {
    constructor(
        private readonly sign_in_service: SignInService
    ) { }

    @Post('/sign-in')
    SignIn(@Body() body: UserDto, @Res() res: Response): Promise<Response> {
        return this.sign_in_service.signIn(body, res);
    }
}
