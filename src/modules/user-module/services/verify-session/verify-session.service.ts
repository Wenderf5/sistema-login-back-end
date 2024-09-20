import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class VerifySessionService {
    constructor(
        private config: ConfigService
    ) { }

    async verifySession(req: Request): Promise<HttpStatus> {
        const token = req.cookies['auth_token'];
        if (!token) {
            return HttpStatus.UNAUTHORIZED;
        }
        const verify = await jwt.verify(token, this.config.get('JWT_SECRET'), (error: Error) => {
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
