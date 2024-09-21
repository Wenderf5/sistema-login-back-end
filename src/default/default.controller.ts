import { Controller, Get } from '@nestjs/common';

@Controller()
export class DefaultController {

    @Get('/')
    default(): string {
        return "Hello world!";
    }
}
