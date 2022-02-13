import { useReducer } from "react";
import { LocationsReducer } from "./locations-Reducer";
import { LocationsContext, LocationsActionsContext } from "./locations-Context";
import { Actions } from "./Actions";

type ChildrenType = {
  children: React.ReactNode;
};

const LocationsProvider = ({ children }: ChildrenType) => {
  const initalState = {
    data: [
      {
        id: 1,
        title: "Shetab Health Center",
        type: "Hospital",
        description: "It's a hospital at ...",
      },
      { id: 2, title: "Bokharest Tower", type: "Business", description: "" },
      {
        id: 3,
        title: "Danesh School",
        type: "Educational",
        description: "This school is based on ...",
      },
    ],
    isOpen: false,
    status: "add",
  };

  const [state, dispatch] = useReducer(LocationsReducer, initalState);

  const openModal = () => {
    dispatch({ type: Actions.OPEN_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: Actions.CLOSE_MODAL });
  };
  const addLocation = (location: Object) => {
    dispatch({ type: Actions.ADD_LOCATION, payload: location });
    closeModal();
  };
  const editLocation = (location: Object) => {
    openModal();
    dispatch({ type: Actions.EDIT_LOCATION, payload: location });
  };
  const removeLocation = (id: number) => {
    dispatch({ type: Actions.REMOVE_LOCATION, payload: id });
  };
  const changeStatus = (status: string) => {
    dispatch({ type: Actions.CHANGE_STATUS_TO_EDIT, payload: status });
  };

  return (
    <LocationsContext.Provider value={{ ...state }}>
      <LocationsActionsContext.Provider
        value={{
          openModal,
          closeModal,
          addLocation,
          editLocation,
          removeLocation,
          changeStatus,
        }}>
        {children}
      </LocationsActionsContext.Provider>
    </LocationsContext.Provider>
  );
};

export default LocationsProvider;
