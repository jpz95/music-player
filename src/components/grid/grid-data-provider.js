import React, { createContext } from 'react';

const context = createContext(null);

export default function GridProvider({ children }) {
  return (
    <context.Provider value={null}>
      {children}
    </context.Provider>
  );
};
GridProvider.context = context;