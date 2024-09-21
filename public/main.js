"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    app.enableCors({
        origin: 'https://sistema-login-two.vercel.app',
        methods: 'GET,POST,PUT,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true
    });
    app.use(cookieParser());
    const PORT = 8080;
    await app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}!`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map