import React from 'react';
import { useState } from 'react';

const Settings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveIndex(index);
    console.log(index);
  };

  return (
    <div className="text-center text-2xl pt-24 flex gap-2">
      <button
        className="px-4 py-1 bg-gray-200"
        onClick={() => handleTabChange(0)}
      >
        a
      </button>
      <button
        className="px-4 py-1 bg-gray-200"
        onClick={() => handleTabChange(1)}
      >
        b
      </button>
      <button
        className="px-4 py-1 bg-gray-200"
        onClick={() => handleTabChange(2)}
      >
        c
      </button>
    </div>
  );
};

export default Settings;
