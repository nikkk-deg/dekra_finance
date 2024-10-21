import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CONSOLE_TEXTS } from './constants/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  process.on('uncaughtException', (err) => {
    console.log(CONSOLE_TEXTS.INTERNET_ERROR, err);
  });
}
bootstrap();
