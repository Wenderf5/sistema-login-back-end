import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as awsServerlessExpress from 'aws-serverless-express';
import { Handler, Context, Callback } from 'aws-lambda';

const server = express();

async function createNestServer(expressInstance) {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));
  
  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }));

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  await app.init();
}

createNestServer(server);

const serverLambda = awsServerlessExpress.createServer(server);

export const handler: Handler = (event: any, context: Context, callback: Callback) => {
  awsServerlessExpress.proxy(serverLambda, event, context);
};