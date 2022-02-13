import { Actions } from "./Actions";

export const LocationsReducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case Actions.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    case Actions.EDIT_LOCATION:
      return {
        ...state,
      };
    case Actions.REMOVE_LOCATION:
      return {
        ...state,
        data: state.data.filter((item: any) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
