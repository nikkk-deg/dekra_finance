import { ADMINS_TG_ID, Debt } from 'src/constants/constants';

export const areUsersAdministrators = (id: number) => {
  return ADMINS_TG_ID.includes(String(id));
};

const format_money = (money: number) => {
  let newMoney = String(money);
  console.log(newMoney.length);
  switch (newMoney.length) {
    case 4: {
      return `${newMoney.slice(0, 1)}'${newMoney.slice(1)}`;
    }
    case 5: {
      return `${newMoney.slice(0, 2)}'${newMoney.slice(2)}`;
    }
    case 6: {
      return `${newMoney.slice(0, 3)}'${newMoney.slice(3)}`;
    }
    case 7: {
      return `${newMoney.slice(0, 1)}'${newMoney.slice(1, 4)}'${newMoney.slice(4)}`;
    }
    case 8: {
      return `${newMoney.slice(0, 2)}'${newMoney.slice(2, 5)}'${newMoney.slice(5)}`;
    }
    default: {
      return newMoney;
    }
  }
};

export const generate_balance_message = (
  dekra_cash: number,
  dekra_non_cash: number,
  dekra_usd: number,
  dekra_usdt: number,
  a109_cash: number,
  a109_non_cash: number,
  debt: Debt,
  usd_course: number,
) => {
  let debt_format = '';
  let dekra_total =
    dekra_cash +
    dekra_non_cash +
    dekra_usd * usd_course +
    dekra_usdt * usd_course;
  let total_debt = 0;
  let A109_total = a109_cash + a109_non_cash;
  for (const [name, amount] of Object.entries(debt)) {
    total_debt += amount;
    debt_format += `          ${name} - ${format_money(amount)} ₽\n\n`;
  }

  return `Dekra - ${format_money(dekra_total)} ₽\n
          наличка - ${format_money(dekra_cash)} ₽\n
          безнал - ${format_money(dekra_non_cash)} ₽\n
          USD - ${format_money(dekra_usd)} $\n
          USDT - ${format_money(dekra_usdt)} $\n\n
A109 - ${format_money(A109_total)} ₽\n
          наличка - ${format_money(a109_cash)} ₽\n
          безнал - ${format_money(a109_non_cash)} ₽\n\n 
Долги - ${format_money(total_debt)} ₽\n
${debt_format}`;
};
