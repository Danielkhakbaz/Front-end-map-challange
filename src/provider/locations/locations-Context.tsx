import { createContext, useContext } from "react";
import { DataType } from "../../types/data-type";

type defaultValueType = {
  data: Array<DataType>;
  isOpen: boolean;
  status: string;
};
const defaultValue: defaultValueType = {
  data: [],
  isOpen: false,
  status: "",
};

type defaultActionsValueType = {
  openModal: Function;
  closeModal: Function;
  addLocation: Function;
  editLocation: Function;
  removeLocation: Function;
  changeStatus: Function;
};
const defaultActionsValue: defaultActionsValueType = {
  openModal: () => {},
  closeModal: () => {},
  addLocation: () => {},
  editLocation: () => {},
  removeLocation: () => {},
  changeStatus: () => {},
};

export const LocationsContext = createContext(defaultValue);
export const LocationsActionsContext = createContext(defaultActionsValue);

export const useLocationsContext = () => {
  return useContext(LocationsContext);
};
export const useLocationsActionsContext = () => {
  return useContext(LocationsActionsContext);
};
