import { Module } from '@nestjs/common';
import { UserModuleModule } from './modules/user-module/user-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HelloController } from './hello-controller/hello.controller';

@Module({
  imports: [
    UserModuleModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity.{ts,js}'],
        synchronize: false,
      })
    }),
  ],
  controllers: [HelloController],
  providers: [],
})
export class AppModule { }