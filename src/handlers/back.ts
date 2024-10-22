import { async } from 'rxjs';
import { TG_MESSAGES } from 'src/constants/constants';
import {
  keyboard1,
  keyboard2,
  keyboard4,
  keyboard3,
  keyboard_7_10,
  keyboard14,
} from 'src/finance/buttons/inline-keyboads';
import { Context } from 'src/finance/finance.context';

export const handlerBackButton = async (ctx: Context) => {
  ctx.deleteMessage();
  switch (ctx.session.type) {
    case 'menu2': {
      ctx.session.type = 'menu1';
      await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard1());
      break;
    }
    case 'menu3':
    case 'menu4':
    case 'menu14': {
      ctx.session.type = 'menu2';
      await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard2());
      break;
    }
    case 'menu5':
    case 'menu6': {
      ctx.session.type = 'menu4';
      await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard4());
      break;
    }
    case 'menu7':
    case 'menu10':
    case 'menu11':
    case 'menu12':
    case 'menu13': {
      ctx.deleteMessage();
      ctx.session.type = 'menu3';
      await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard3());
      break;
    }
    case 'menu8':
    case 'menu9': {
      ctx.session.type = 'menu7';
      await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard_7_10(4, false));
      break;
    }
    case 'menu15':
    case 'menu16': {
      ctx.session.type = 'menu14';
      await ctx.reply(TG_MESSAGES.SELECT_ACTION, keyboard14());
      break;
    }
  }
};
