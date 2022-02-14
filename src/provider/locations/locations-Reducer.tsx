import { Actions } from "./Actions";
import { StateType, ActionType } from "../../types/locations-reducer-type";

export const LocationsReducer = (state: StateType, action: ActionType) => {
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
    case Actions.ADD_LOCATION:
      const newLocation = { ...action.payload, id: state.data.length + 1 };

      return {
        ...state,
        data: [newLocation, ...state.data],
      };
    case Actions.EDIT_LOCATION:
      const updatedLocation = action.payload;

      const updatedLocations = state.data.map((item) => {
        if (item.id === updatedLocation.id) {
          return updatedLocation;
        }
        return item;
      });

      return {
        ...state,
        data: updatedLocations,
      };
    case Actions.REMOVE_LOCATION:
      return {
        ...state,
        data: state.data.filter((item: any) => item.id !== action.payload),
      };
    case Actions.CHANGE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
