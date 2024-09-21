"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifySessionService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt = require("jsonwebtoken");
let VerifySessionService = class VerifySessionService {
    constructor(config) {
        this.config = config;
    }
    async verifySession(req) {
        const token = req.cookies['auth_token'];
        if (!token) {
            return common_1.HttpStatus.UNAUTHORIZED;
        }
        const verify = await jwt.verify(token, this.config.get('JWT_SECRET'), (error) => {
            if (error) {
                return false;
            }
            return true;
        });
        if (verify) {
            return common_1.HttpStatus.OK;
        }
        return common_1.HttpStatus.UNAUTHORIZED;
    }
};
exports.VerifySessionService = VerifySessionService;
exports.VerifySessionService = VerifySessionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], VerifySessionService);
//# sourceMappingURL=verify-session.service.js.map