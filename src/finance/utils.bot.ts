import { ADMINS_TG_ID } from 'src/constants/constants';

export const areUsersAdministrators = (id: number) => {
  return ADMINS_TG_ID.includes(String(id));
};
