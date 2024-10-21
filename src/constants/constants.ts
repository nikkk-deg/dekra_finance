export const CONSOLE_TEXTS = {
  STATUS_TG_OK: 'The connection to the telegram is completed successfully',
  STATUS_TG_ERROR: 'Connection to telegram has NOT been completed',
  INTERNET_ERROR: 'There is no internet connection',
  CONNECT_TO_DB: 'Connected to DB is completed successfully',
};

export const LINKS = {
  TELEGRAM_CHECK: 'https://api.telegram.org/bot7202681628',
};

export const ADMINS_TG_ID = ['410826310', '1831394748'];

export const CONTEXT_TG = {
  CHANGE_USD: 'change_usd',
};

export const TG_MESSAGES = {
  SELECT_ACTION: 'Выберите действие:',
  ACCESS_DENIED: 'У Вас нет прав доступа к боту.',
  WHICH_BALANCE_TO_CHANGE: 'Какой баланс изменить?',
  ENTER_AMOUNT: 'Введите сумму:',
  WHO_OWES: 'Кто должен',
  WHO_OWES_QUESTION: 'Кто должен?',
  HOW_MUCH_MONEY: 'Сколько денег?',
  CONFIRM_CORRECTNESS: 'р -верно?',
};

export const TG_BUTTONS = {
  CHANGE_CASH: 'Изменить наличку',
  CHANGE_NON_CASH: 'Изменить безнал',
  CHANGE_USD: 'Изменить USD',
  CHANGE_USDT: 'Изменить USDT',
  BACK: 'Назад',
  PLUS: '+',
  MINUS: '-',
  SHOW_BALANCE: 'Показать баланс',
  CHANGE_BALANCE: 'Изменить баланс',
  DEKRA: 'Изменить Dekra',
  CHANGE_DEBT: 'Изменить долг',
  CHANGE_A109: 'Изменить А109',
  ADD_DEBT: 'Добавить долг',
  EDIT_DEBT: 'Редактировать долг',
  DELETE_DEBT: 'Удалить долг',
  YES_ADD: 'Да, добавить',
  DELETE: 'Удалить',
  CHANGE: 'Изменить',
  YES_CHANGE: 'Да, изменить',
};

export interface Debt {
  [name: string]: number;
}
