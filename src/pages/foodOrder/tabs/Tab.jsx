import React from 'react';
import A from './A';
import B from './B';
import C from './C';

const Tab = ({ activeIndex }) => {
  return (
    <div>
      {activeIndex === 0 && <A></A>}
      {activeIndex === 1 && <B></B>}
      {activeIndex === 2 && <C></C>}
    </div>
  );
};

export default Tab;
