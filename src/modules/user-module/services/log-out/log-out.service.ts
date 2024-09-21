import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class LogOutService {
    logout(res: Response): Response {
        try {
            return res.clearCookie('auth_token', {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
            }).status(HttpStatus.OK).send();
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send();
        }
    }
}
