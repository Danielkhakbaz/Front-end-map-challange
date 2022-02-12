import { createContext, useContext } from "react";

type dataType = {
  title: string;
  type: string;
  description: string;
};

type defaultValueType = {
  data: Array<dataType>;
  // setData: Function;
};

const defaultValue: defaultValueType = {
  data: [],
  // setData: () => { },
};

type defaultActionsValueType = {
  setData: Function;
};

const defaultActionsValue: defaultActionsValueType = {
  setData: () => {},
};

export const LocationsContext = createContext(defaultValue);

export const LocationsActionsContext = createContext(defaultActionsValue);

export const useLocationsContext = () => {
  return useContext(LocationsContext);
};

export const useLocationsActionsContext = () => {
  return useContext(LocationsActionsContext);
};
