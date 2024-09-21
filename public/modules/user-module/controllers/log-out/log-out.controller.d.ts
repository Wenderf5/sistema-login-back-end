import { Response } from 'express';
import { LogOutService } from '../../services/log-out/log-out.service';
export declare class LogOutController {
    private readonly log_out_service;
    constructor(log_out_service: LogOutService);
    logOut(res: Response): Response;
}
