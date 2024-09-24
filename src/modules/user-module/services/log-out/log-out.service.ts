import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class LogOutService {
    logout(res: Response): Response {
        try {
            return res.clearCookie('auth_token', {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                maxAge: 60 * 60 * 24 * 7 * 1000,
                domain: 'sistema-login-back-end-production.up.railway.app'
            }).status(HttpStatus.OK).send();
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send();
        }
    }
}
