import { HttpException, HttpStatus, Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { PrismaModule } from './prisma/prisma.module';
import { CONSOLE_TEXTS, LINKS } from './constants/constants';
import { FinanceModule } from './finance/finance.module';

const session = new LocalSession({ database: 'session_db.json' });

setInterval(() => {
  fetch(LINKS.TELEGRAM_CHECK)
    .then(() => console.log(CONSOLE_TEXTS.STATUS_TG_OK))
    .catch(() => {
      throw new HttpException(
        CONSOLE_TEXTS.STATUS_TG_ERROR,
        HttpStatus.BAD_REQUEST,
      );
    });
}, 6000);

@Module({
  imports: [
    FinanceModule,
    TelegrafModule.forRoot({
      middlewares: [session.middleware()],
      token: process.env.TOKEN,
    }),
    PrismaModule,
  ],
})
export class AppModule {}
