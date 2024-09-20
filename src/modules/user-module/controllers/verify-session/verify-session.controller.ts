import { Controller, Get, HttpStatus, Req } from '@nestjs/common';
import { VerifySessionService } from '../../services/verify-session/verify-session.service';
import { Request } from 'express';

@Controller()
export class VerifySessionController {
    constructor(
        private verify_session_service: VerifySessionService
    ) { }

    @Get('/verify-session')
    verifySession(@Req() req: Request): Promise<HttpStatus> {
        return this.verify_session_service.verifySession(req);
    }
}
