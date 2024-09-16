import { Controller, HttpStatus, Post } from '@nestjs/common';
import { SignUpService } from '../../services/sign-up/sign-up.service';

@Controller()
export class SignUpController {
    constructor(
        private readonly sign_up_service: SignUpService
    ) { }

    @Post('/sign-up')
    newUser(): Promise<HttpStatus> {
        return this.sign_up_service.newUser();
    }
}
