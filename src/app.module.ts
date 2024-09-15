import { Module } from '@nestjs/common';
import { UserModuleModule } from './modules/user-module/user-module.module';

@Module({
  imports: [UserModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
