import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { NewUserDto } from './dto/new-user-dto/new-user-dto';

@Controller()
export class SignUpController {
    constructor(
        private readonly sign_up_service: SignUpService
    ) { }

    @Post('/sign-up')
    newUser(@Body() body: NewUserDto): Promise<HttpStatus> {
        return this.sign_up_service.newUser(body);
    }
}
