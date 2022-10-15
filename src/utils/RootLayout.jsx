import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

const RootLayout = () => {
  return (
    <div className='flex w-full font-poppins'>
      <Sidebar/>
      <main className='w-full py-6 md:px-3 lg:px-6  2xl:px-8 bg-[#F5F5F5]'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
