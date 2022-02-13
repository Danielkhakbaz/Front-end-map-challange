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
  };

  const [state, dispatch] = useReducer(LocationsReducer, initalState);

  const openModal = () => {
    dispatch({ type: Actions.OPEN_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: Actions.CLOSE_MODAL });
  };
  const editLocation = () => {
    dispatch({ type: Actions.EDIT_LOCATION });
  };
  const removeLocation = (id: number) => {
    dispatch({ type: Actions.REMOVE_LOCATION, payload: id });
  };

  return (
    <LocationsContext.Provider value={{ ...state }}>
      <LocationsActionsContext.Provider
        value={{ openModal, closeModal, editLocation, removeLocation }}>
        {children}
      </LocationsActionsContext.Provider>
    </LocationsContext.Provider>
  );
};

export default LocationsProvider;
