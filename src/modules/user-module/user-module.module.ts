import { Module } from '@nestjs/common';
import { SignInController } from './controllers/sign-in/sign-in.controller';
import { SignInService } from './services/sign-in/sign-in.service';
import { SignUpController } from './controllers/sign-up/sign-up.controller';
import { SignUpService } from './services/sign-up/sign-up.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/dataBase/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [SignInController, SignUpController],
  providers: [SignInService, SignUpService]
})
export class UserModuleModule {}
