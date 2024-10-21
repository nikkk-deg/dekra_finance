import { Controller } from '@nestjs/common';
import { Action, Hears, InjectBot, Start, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { Context } from './finance.context';
import { FinanceService } from './finance.service';
import { areUsersAdministrators, generate_balance_message } from './utils.bot';
import { TG_BUTTONS, TG_MESSAGES } from 'src/constants/constants';
import { keyboard14, keyboard_5_8_11_12_15 } from './buttons/inline-keyboads';
import { handlerBackButton } from 'src/handlers/back';

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
      ctx.session.type = 'menu8';

      await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard_5_8_11_12_15());
      // await ctx.reply(
      //   generate_balance_message(
      //     17000000,
      //     500,
      //     714,
      //     499,
      //     23000,
      //     4000,
      //     {
      //       Ростик: 10000,
      //       Никита: 9600,
      //       Макаренко: 20000,
      //       ДГ: 25000,
      //     },
      //     93,
      //   ),
      // );
      return;
    }
    await ctx.reply(TG_MESSAGES.ACCESS_DENIED);
  }

  @Action('back')
  async handlerBack(ctx: Context) {
    handlerBackButton(ctx);
  }
}
