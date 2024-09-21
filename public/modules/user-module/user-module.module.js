"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModuleModule = void 0;
const common_1 = require("@nestjs/common");
const sign_in_controller_1 = require("./controllers/sign-in/sign-in.controller");
const sign_in_service_1 = require("./services/sign-in/sign-in.service");
const sign_up_controller_1 = require("./controllers/sign-up/sign-up.controller");
const sign_up_service_1 = require("./services/sign-up/sign-up.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../dataBase/entities/user.entity");
const verify_session_controller_1 = require("./controllers/verify-session/verify-session.controller");
const verify_session_service_1 = require("./services/verify-session/verify-session.service");
const log_out_controller_1 = require("./controllers/log-out/log-out.controller");
const log_out_service_1 = require("./services/log-out/log-out.service");
let UserModuleModule = class UserModuleModule {
};
exports.UserModuleModule = UserModuleModule;
exports.UserModuleModule = UserModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [sign_in_controller_1.SignInController, sign_up_controller_1.SignUpController, verify_session_controller_1.VerifySessionController, log_out_controller_1.LogOutController],
        providers: [sign_in_service_1.SignInService, sign_up_service_1.SignUpService, verify_session_service_1.VerifySessionService, log_out_service_1.LogOutService]
    })
], UserModuleModule);
//# sourceMappingURL=user-module.module.js.map