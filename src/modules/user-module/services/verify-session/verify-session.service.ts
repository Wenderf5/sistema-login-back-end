import { HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { decode } from 'punycode';
const secret = "41g498712b87f1658cc6";

@Injectable()
export class VerifySessionService {

    async verifySession(body: any): Promise<HttpStatus> {
        const token = body.token;
        const verify = await jwt.verify(token, secret, (error: Error) => {
            if (error) {
                return false;
            }
            return true;
        });
        if (verify) {
            return HttpStatus.OK;
        }
        return HttpStatus.UNAUTHORIZED;
    }
}
