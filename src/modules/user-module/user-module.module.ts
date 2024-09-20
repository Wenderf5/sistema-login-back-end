import { Module } from '@nestjs/common';
import { SignInController } from './controllers/sign-in/sign-in.controller';
import { SignInService } from './services/sign-in/sign-in.service';
import { SignUpController } from './controllers/sign-up/sign-up.controller';
import { SignUpService } from './services/sign-up/sign-up.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/dataBase/entities/user.entity';
import { VerifySessionController } from './controllers/verify-session/verify-session.controller';
import { VerifySessionService } from './services/verify-session/verify-session.service';
import { LogOutController } from './controllers/log-out/log-out.controller';
import { LogOutService } from './services/log-out/log-out.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [SignInController, SignUpController, VerifySessionController, LogOutController],
  providers: [SignInService, SignUpService, VerifySessionService, LogOutService]
})
export class UserModuleModule {}
