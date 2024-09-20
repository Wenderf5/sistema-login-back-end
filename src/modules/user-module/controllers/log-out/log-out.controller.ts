import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { LogOutService } from '../../services/log-out/log-out.service';

@Controller()
export class LogOutController {
    constructor(
        private readonly log_out_service: LogOutService
    ) { }

    @Get('/logout')
    logOut(@Res() res: Response): Response {
        return this.log_out_service.logout(res);
    }
}
