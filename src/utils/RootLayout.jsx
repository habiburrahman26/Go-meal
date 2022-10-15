import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

const RootLayout = () => {
  return (
    <div className='flex w-full font-poppins'>
      <Sidebar/>
      <main className='w-full py-10 px-8 bg-[#F5F5F5]'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
