import { DataType } from "./data-type";

export type StateType = {
  data: Array<DataType>;
  isOpen: boolean;
  status: string;
  location: DataType;
};

export type ActionType = {
  type: string;
  payload?: any;
};
