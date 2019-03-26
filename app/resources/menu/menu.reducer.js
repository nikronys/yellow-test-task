import { OPEN_MENU, CLOSE_MENU } from './menu.actions';


export const expandMenu = (state = false, action) => {
  switch (action.type) {
  case OPEN_MENU:
    return true;
  case CLOSE_MENU:
    return false;
  default:
    return state;
  }
};

export default expandMenu;