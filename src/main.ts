import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { createServer, proxy } from 'aws-serverless-express';
import { Server } from 'http';
import { Handler, Context, Callback } from 'aws-lambda';

const expressApp = express();
let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  app.useGlobalPipes(new ValidationPipe({
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

  await app.init();
  return createServer(expressApp);
}

export const handler: Handler = (event: any, context: Context, callback: Callback) => {
  if (!cachedServer) {
    bootstrapServer().then((server) => {
      cachedServer = server;
      return proxy(server, event, context, 'PROMISE').promise;
    });
  } else {
    return proxy(cachedServer, event, context, 'PROMISE').promise;
  }
};