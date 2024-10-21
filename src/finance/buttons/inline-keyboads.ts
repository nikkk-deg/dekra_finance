import { TG_BUTTONS } from 'src/constants/constants';
import { Markup } from 'telegraf';

export const mainKeyboard = [
  [
    {
      text: TG_BUTTONS.SHOW_BALANCE,
      callback_data: 'show_balance',
    },
    {
      text: TG_BUTTONS.CHANGE_BALANCE,
      callback_data: 'change_balance',
    },
  ],
];
