import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { VerifySessionService } from '../../services/verify-session/verify-session.service';

@Controller()
export class VerifySessionController {
    constructor(
        private verify_session_service: VerifySessionService
    ) { }

    @Post('/verify-session')
    verifySession(@Body() body: any): Promise<HttpStatus> {
        return this.verify_session_service.verifySession(body);
    }
}
