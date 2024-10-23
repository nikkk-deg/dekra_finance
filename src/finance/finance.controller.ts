import { Controller } from '@nestjs/common';
import {
  Action,
  Ctx,
  Hears,
  InjectBot,
  Message,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { Context } from './finance.context';
import { FinanceService } from './finance.service';
import { areUsersAdministrators, generate_balance_message } from './utils.bot';
import { TG_BUTTONS, TG_MESSAGES } from 'src/constants/constants';
import {
  keyboard1,
  keyboard14,
  keyboard2,
  keyboard3,
  keyboard4,
  keyboard_5_8_11_12_15,
  keyboard_6_16,
  keyboard_7_10,
  keyboard_9_13,
} from './buttons/inline-keyboads';
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
      ctx.session.type = 'menu1';

      await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard1());

      return;
    }
    await ctx.reply(TG_MESSAGES.ACCESS_DENIED);
  }

  @Action('back')
  async handlerBack(ctx: Context) {
    handlerBackButton(ctx);
  }

  @Action('show_balance')
  async showBalance(ctx: Context) {
    ctx.deleteMessage();
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
    ctx.session.type = 'menu1';
    await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard1());
  }

  @Action('change_balance')
  async handlerChangeBalance(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu2';
    await ctx.reply(TG_MESSAGES.WHICH_BALANCE_TO_CHANGE, keyboard2());
  }
  @Action('change_debt')
  async handlerChangeDebt(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu3';
    await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard3());
  }
  @Action('change_a109')
  async handlerChangeA109(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu4';
    await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard4());
  }
  @Action('dekra')
  async handlerDEKRA(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu14';
    await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard14());
  }
  @Action('add_debt')
  async handlerAddDebt(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu11';
    await ctx.reply(TG_MESSAGES.WHO_OWES_QUESTION, keyboard_5_8_11_12_15());
  }
  @Action('yes_add')
  async handlerYesAdd(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu3';
    await ctx.reply(TG_MESSAGES.WHO_OWES_QUESTION, keyboard3());
  }
  @Action('delete_debt')
  async handlerDeleteDebt(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu10';
    await ctx.reply(
      'Написаны должны быть долги делит 1 2 3',
      keyboard_7_10(3, true),
    );
  }

  @Action('edit_debt')
  async handlerEditDebt(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu7';
    await ctx.reply(
      'Написаны должны быть долги редачить 1 2 3',
      keyboard_7_10(3, false),
    );
  }
  //обработка меню 8 и 9 - Action - динамически созданные данные - обработать
  // @Action('edit_debt')
  // async handlerEditDebt(ctx: Context) {
  //   ctx.deleteMessage();
  //   ctx.session.type = 'menu7';
  //   await ctx.reply(
  //     'Написаны должны быть долги редачить 1 2 3',
  //     keyboard_7_10(3, false),
  //   );
  // }
  // @Action('edit_debt')
  // async handlerEditDebt(ctx: Context) {
  //   ctx.deleteMessage();
  //   ctx.session.type = 'menu7';
  //   await ctx.reply(
  //     'Написаны должны быть долги редачить 1 2 3',
  //     keyboard_7_10(3, false),
  //   );
  // }

  @Action('change_cash')
  async handlerСhangeСash(ctx: Context) {
    ctx.deleteMessage();
    if (ctx.session.type === 'menu4') {
      ctx.session.type = 'menu5';
    } else if (ctx.session.type === 'menu14') {
      ctx.session.type = 'menu15';
    }

    await ctx.reply(TG_MESSAGES.ENTER_AMOUNT, keyboard_5_8_11_12_15());
  }
  @Action('change_non_cash')
  async handlerChangeNonCash(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu5';
    await ctx.reply(TG_MESSAGES.ENTER_AMOUNT, keyboard_5_8_11_12_15());
  }
  @Action('plus')
  async handlerPlus(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu2';
    await ctx.reply(TG_MESSAGES.WHICH_BALANCE_TO_CHANGE, keyboard2());
  }
  @Action('minus')
  async handlerMinus(ctx: Context) {
    ctx.deleteMessage();
    ctx.session.type = 'menu2';
    await ctx.reply(TG_MESSAGES.WHICH_BALANCE_TO_CHANGE, keyboard2());
  }
  @On('text')
  async handlerInputNewDebt(@Message('text') msg: string, @Ctx() ctx: Context) {
    switch (ctx.session.type) {
      case 'menu11': {
        ctx.deleteMessage();
        console.log(msg); //Запись в БД
        ctx.session.type = 'menu12';
        await ctx.reply(TG_MESSAGES.HOW_MUCH_MONEY, keyboard_5_8_11_12_15());
        break;
      }
      case 'menu12': {
        ctx.deleteMessage();
        console.log(msg); //Запись в БД
        ctx.session.type = 'menu13';
        await ctx.reply(
          'Здесь должны быть динамически созданные данные',
          keyboard_9_13(),
        );
        break;
      }
      case 'menu5': {
        ctx.deleteMessage();
        console.log(msg); //Запись в БД
        if (ctx.session.type === 'menu5') {
          ctx.session.type = 'menu6';
        } else if (ctx.session.type === 'menu15') {
          ctx.session.type = 'menu16';
        }

        await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard_6_16());
        break;
      }
    }
  }
}
