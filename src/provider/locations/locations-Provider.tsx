import { useState } from "react";
import { LocationsContext, LocationsActionsContext } from "./locations-Context";

type ChildrenType = {
  children: React.ReactNode;
};

const LocationsProvider = ({ children }: ChildrenType) => {
  const initalValue = [
    {
      title: "Shetab Health Center",
      type: "Hospital",
      description: "It's a hospital at ...",
    },
    { title: "Bokharest Tower", type: "Business", description: "" },
    {
      title: "Danesh School",
      type: "Educational",
      description: "This school is based on ...",
    },
  ];

  const [data, setData] = useState(initalValue);

  return (
    <LocationsContext.Provider value={{ data }}>
      <LocationsActionsContext.Provider value={{ setData }}>
        {children}
      </LocationsActionsContext.Provider>
    </LocationsContext.Provider>
  );
};

export default LocationsProvider;
