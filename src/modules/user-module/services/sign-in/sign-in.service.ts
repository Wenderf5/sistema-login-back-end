import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class SignInService {

    signIn(body: any): HttpStatus {
        console.log(body);
        return HttpStatus.OK;
    }
}
