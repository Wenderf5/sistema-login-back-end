import { HttpStatus } from '@nestjs/common';
import { VerifySessionService } from '../../services/verify-session/verify-session.service';
import { Request } from 'express';
export declare class VerifySessionController {
    private verify_session_service;
    constructor(verify_session_service: VerifySessionService);
    verifySession(req: Request): Promise<HttpStatus>;
}
