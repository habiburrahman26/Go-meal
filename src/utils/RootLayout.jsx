import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import ToggleContext from '../store/ToggleSideBar';

const RootLayout = () => {
  const [isShow, setIsShow] = useState(false);

  const toggle = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <div className="flex w-full font-poppins">
      <ToggleContext.Provider value={{ isShow, toggle }}>
        <Sidebar />
        <main className="w-full  bg-[#F5F5F5]">
          <Outlet />
        </main>
      </ToggleContext.Provider>
    </div>
  );
};

export default RootLayout;
