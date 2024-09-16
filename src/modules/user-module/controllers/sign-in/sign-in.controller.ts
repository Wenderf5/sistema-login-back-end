import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { SignInService } from '../../services/sign-in/sign-in.service';
import { UserDto } from './dto/user-dto/user-dto';

@Controller()
export class SignInController {
    constructor(
        private readonly sign_in_service: SignInService
    ) { }

    @Post('/sign-in')
    SignIn(@Body() body: UserDto): Promise<HttpStatus> {
        return this.sign_in_service.signIn(body);
    }
}
