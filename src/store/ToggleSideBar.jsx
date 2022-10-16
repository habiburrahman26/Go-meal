import React, { useState } from "react";

const ToggleContext = React.createContext();

export default ToggleSideBar = () => {
  const [isShow, setIsShow] = useState(false);

  const toggle = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <ToggleContext.Provider value={{ isShow, toggle }}></ToggleContext.Provider>
  );
};
