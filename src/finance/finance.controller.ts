import { Controller } from '@nestjs/common';
import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { Context } from './finance.context';
import { FinanceService } from './finance.service';
import { areUsersAdministrators } from './utils.bot';
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
      return;
    }
    await ctx.reply(TG_MESSAGES.ACCESS_DENIED);
  }
}
