import React, { useState } from 'react';

const ToggleContext = React.createContext({
  isShow: false,
  toggle: () => {},
});

export default ToggleContext;

