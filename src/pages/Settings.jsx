import React from 'react';
import { useState } from 'react';
import Tab from './foodOrder/tabs/Tab';

const Settings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="text-center text-2xl pt-24 flex gap-2">
      <button
        className={`px-4 py-1 bg-gray-200 ${activeIndex === 0 && 'bg-red-300'}`}
        onClick={() => handleTabChange(0)}
      >
        a
      </button>
      <button
        className={`px-4 py-1 bg-gray-200 ${activeIndex === 1 && 'bg-red-300'}`}
        onClick={() => handleTabChange(1)}
      >
        b
      </button>
      <button
        className={`px-4 py-1 bg-gray-200 ${activeIndex === 2 && 'bg-red-300'}`}
        onClick={() => handleTabChange(2)}
      >
        c
      </button>
      <Tab activeIndex={activeIndex} />
    </div>
  );
};

export default Settings;
