import { Context as ContextTelegraf } from 'telegraf';

export interface Context extends ContextTelegraf {
  session: {
    type?:
      | 'menu1'
      | 'menu2'
      | 'menu3'
      | 'menu4'
      | 'menu5'
      | 'menu6'
      | 'menu7'
      | 'menu8'
      | 'menu9'
      | 'menu10'
      | 'menu11'
      | 'menu12'
      | 'menu13'
      | 'menu14'
      | 'menu15'
      | 'menu16';
  };
}
