import { createContext, useContext } from "react";

type dataType = {
  id: number;
  title: string;
  type: string;
  description: string;
};

type defaultValueType = {
  data: Array<dataType>;
  isOpen: boolean;
};

const defaultValue: defaultValueType = {
  data: [],
  isOpen: false,
};

type defaultActionsValueType = {
  openModal: Function;
  closeModal: Function;
  editLocation: Function;
  removeLocation: Function;
};

const defaultActionsValue: defaultActionsValueType = {
  openModal: () => {},
  closeModal: () => {},
  editLocation: () => {},
  removeLocation: () => {},
};

export const LocationsContext = createContext(defaultValue);

export const LocationsActionsContext = createContext(defaultActionsValue);

export const useLocationsContext = () => {
  return useContext(LocationsContext);
};

export const useLocationsActionsContext = () => {
  return useContext(LocationsActionsContext);
};
