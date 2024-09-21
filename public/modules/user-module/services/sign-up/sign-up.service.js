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
exports.SignUpService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../../dataBase/entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let SignUpService = class SignUpService {
    constructor(user_repository) {
        this.user_repository = user_repository;
    }
    async newUser(newUser) {
        try {
            await this.user_repository.save({
                user_name: newUser.user_name,
                password: await bcrypt.hash(newUser.password, 10)
            });
            return common_1.HttpStatus.CREATED;
        }
        catch (error) {
            return common_1.HttpStatus.BAD_REQUEST;
        }
    }
};
exports.SignUpService = SignUpService;
exports.SignUpService = SignUpService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SignUpService);
//# sourceMappingURL=sign-up.service.js.map