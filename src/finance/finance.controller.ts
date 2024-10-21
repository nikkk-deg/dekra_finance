import { Controller } from '@nestjs/common';
import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { Context } from './finance.context';
import { FinanceService } from './finance.service';
import { areUsersAdministrators, generate_balance_message } from './utils.bot';
import { TG_MESSAGES } from 'src/constants/constants';
import { mainKeyboard } from './buttons/inline-keyboads';

@Controller('finance')
@Update()
export class FinanceController {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private lifeService: FinanceService,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    if (areUsersAdministrators(ctx.message.chat.id)) {
      await ctx.reply(TG_MESSAGES.SELECT_ACTION, {
        reply_markup: { inline_keyboard: mainKeyboard },
      });
      await ctx.reply(
        generate_balance_message(
          17000000,
          500,
          714,
          499,
          23000,
          4000,
          {
            Ростик: 10000,
            Никита: 9600,
            Макаренко: 20000,
            ДГ: 25000,
          },
          93,
        ),
      );
      return;
    }
    await ctx.reply(TG_MESSAGES.ACCESS_DENIED);
  }
}
