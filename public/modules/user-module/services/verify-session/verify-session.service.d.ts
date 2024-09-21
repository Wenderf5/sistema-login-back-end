import { HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
export declare class VerifySessionService {
    private config;
    constructor(config: ConfigService);
    verifySession(req: Request): Promise<HttpStatus>;
}
