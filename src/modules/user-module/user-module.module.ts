import { Module } from '@nestjs/common';
import { SignInController } from './controllers/sign-in/sign-in.controller';
import { SignInService } from './services/sign-in/sign-in.service';

@Module({
  controllers: [SignInController],
  providers: [SignInService]
})
export class UserModuleModule {}
