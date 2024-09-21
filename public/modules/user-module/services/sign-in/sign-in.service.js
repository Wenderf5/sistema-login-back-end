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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../../dataBase/entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config_1 = require("@nestjs/config");
let SignInService = class SignInService {
    constructor(user_repository, config) {
        this.user_repository = user_repository;
        this.config = config;
    }
    async signIn(body, res) {
        const userdb = await this.user_repository.findOne({
            where: {
                user_name: body.user_name
            }
        });
        if (!userdb) {
            return res.status(common_1.HttpStatus.NOT_FOUND).send();
        }
        const login = await bcrypt.compare(body.password, userdb.password);
        if (login === true) {
            const token = jwt.sign({ user_name: userdb.user_name }, this.config.get('JWT_SECRET'));
            return res.cookie('auth_token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
            }).status(common_1.HttpStatus.OK).send();
        }
        else {
            return res.status(common_1.HttpStatus.UNAUTHORIZED).send();
        }
    }
};
exports.SignInService = SignInService;
exports.SignInService = SignInService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], SignInService);
//# sourceMappingURL=sign-in.service.js.map