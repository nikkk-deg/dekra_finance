import { TG_BUTTONS } from 'src/constants/constants';

export const keyboard1 = () => {
  return {
    reply_markup: {
      inline_keyboard: [
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
      ],
    },
  };
};

export const keyboard2 = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: TG_BUTTONS.DEKRA,
            callback_data: 'dekra',
          },
          {
            text: TG_BUTTONS.CHANGE_DEBT,
            callback_data: 'change_debt',
          },
        ],
        [
          {
            text: TG_BUTTONS.CHANGE_A109,
            callback_data: 'change_a109',
          },
          {
            text: TG_BUTTONS.BACK,
            callback_data: 'back',
          },
        ],
      ],
    },
  };
};

export const keyboard3 = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: TG_BUTTONS.ADD_DEBT,
            callback_data: 'add_debt',
          },
          {
            text: TG_BUTTONS.EDIT_DEBT,
            callback_data: 'edit_debt',
          },
        ],
        [
          {
            text: TG_BUTTONS.DELETE_DEBT,
            callback_data: 'delete_debt',
          },
          {
            text: TG_BUTTONS.BACK,
            callback_data: 'back',
          },
        ],
      ],
    },
  };
};

export const keyboard4 = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: TG_BUTTONS.CHANGE_CASH,
            callback_data: 'change_cash',
          },
          {
            text: TG_BUTTONS.CHANGE_NON_CASH,
            callback_data: 'change_balance',
          },
        ],
        [
          {
            text: TG_BUTTONS.BACK,
            callback_data: 'back',
          },
        ],
      ],
    },
  };
};

export const keyboard_5_8_11_12_15 = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: TG_BUTTONS.BACK,
            callback_data: 'back',
          },
        ],
      ],
    },
  };
};

export const keyboard_6_16 = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: TG_BUTTONS.PLUS,
            callback_data: 'plus',
          },
          {
            text: TG_BUTTONS.MINUS,
            callback_data: 'minus',
          },
        ],
        [
          {
            text: TG_BUTTONS.BACK,
            callback_data: 'back',
          },
        ],
      ],
    },
  };
};

export const keyboard_7_10 = (countOfDebt: number, trueIfDelete: boolean) => {
  let keyboard = [];
  for (let i = 0; i < countOfDebt; i++) {
    keyboard.push([
      {
        text: `${trueIfDelete ? TG_BUTTONS.DELETE : TG_BUTTONS.CHANGE} ${i + 1}`,
        callback_data: `${trueIfDelete ? TG_BUTTONS.DELETE : TG_BUTTONS.CHANGE}_${i + 1}`,
      },
    ]);
  }
  keyboard.push([
    {
      text: TG_BUTTONS.BACK,
      callback_data: 'back',
    },
  ]);
  return {
    reply_markup: {
      inline_keyboard: keyboard,
    },
  };
};

export const keyboard_9_13 = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: TG_BUTTONS.YES_ADD,
            callback_data: 'yes_add',
          },
          {
            text: TG_BUTTONS.BACK,
            callback_data: 'back',
          },
        ],
      ],
    },
  };
};

export const keyboard14 = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: TG_BUTTONS.CHANGE_CASH,
            callback_data: 'change_cash',
          },
          {
            text: TG_BUTTONS.CHANGE_NON_CASH,
            callback_data: 'change_non_cash',
          },
        ],
        [
          {
            text: TG_BUTTONS.CHANGE_USD,
            callback_data: 'change_usd',
          },
          {
            text: TG_BUTTONS.CHANGE_USDT,
            callback_data: 'change_usdt',
          },
        ],
        [
          {
            text: TG_BUTTONS.BACK,
            callback_data: 'back',
          },
        ],
      ],
    },
  };
};
