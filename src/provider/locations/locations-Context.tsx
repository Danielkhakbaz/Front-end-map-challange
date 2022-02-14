import { createContext, useContext } from "react";
import { DataType } from "../../types/data-type";

type defaultValueType = {
  data: Array<DataType>;
  isOpen: boolean;
  status: string;
  location: DataType;
};
const defaultValue: defaultValueType = {
  data: [],
  isOpen: false,
  status: "",
  location: {},
};

type defaultActionsValueType = {
  openModal: Function;
  closeModal: Function;
  addLocation: Function;
  editLocation: Function;
  removeLocation: Function;
  changeStatus: Function;
  setLocation: Function;
};
const defaultActionsValue: defaultActionsValueType = {
  openModal: () => {},
  closeModal: () => {},
  addLocation: () => {},
  editLocation: () => {},
  removeLocation: () => {},
  changeStatus: () => {},
  setLocation: () => {},
};

export const LocationsContext = createContext(defaultValue);
export const LocationsActionsContext = createContext(defaultActionsValue);

export const useLocationsContext = () => {
  return useContext(LocationsContext);
};
export const useLocationsActionsContext = () => {
  return useContext(LocationsActionsContext);
};
