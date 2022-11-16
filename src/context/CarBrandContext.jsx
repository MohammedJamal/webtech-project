import React, { useState } from "react";

export const CarBrandContext = React.createContext();

const CarBrandProvider = ({ children }) => {
  const [carBrandState, setCarBrandState] = useState({
    isToggleLeftBar: true,
    toggleLeftBar: () => {
      setCarBrandState((prevCarBrandState) => ({
        ...prevCarBrandState,
        isToggleLeftBar: !prevCarBrandState.isToggleLeftBar,
      }));
    },
    modelsFilter: [],
    setModelsFilter: (models) => {
      setCarBrandState((prevCarBrandState) => ({
        ...prevCarBrandState,
        modelsFilter: models,
      }));
    },
    removeModelInFilter: (modelToRemove) => {
      setCarBrandState((prevCarBrandState) => {
        return {
          ...prevCarBrandState,
          modelsFilter: prevCarBrandState.modelsFilter.filter(model => model != modelToRemove)
        }
      }) 
    },
    addModelInFilter: (modelToAdd) => {
      setCarBrandState((prevCarBrandState) => {
        return {
          ...prevCarBrandState,
          modelsFilter: [...prevCarBrandState.modelsFilter, modelToAdd]
        }
      }) 
    }
  });

  return (
    <CarBrandContext.Provider value={[carBrandState, setCarBrandState]}>
      {children}
    </CarBrandContext.Provider>
  );
};

export default CarBrandProvider;
