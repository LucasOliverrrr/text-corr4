import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Projeto API')
    .setDescription('API para gerenciamento de projetos')
    .setVersion('1.0')
    .build();
    
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) =>
        new HttpException(
          {
            message: 'Entrada de dados invalida',
            errors: errors,
          },
          HttpStatus.BAD_REQUEST,
        ),
    }),
  );
  await app.listen(3000);
}
bootstrap();
}