import { FilterContextProps } from '@/@types';
import React, { createContext, useContext, ReactNode, useState } from 'react';


// Create the context
export const FilterContext = createContext<FilterContextProps | undefined>(undefined);

// Create a provider component
export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [parts, setParts] = useState<string | null>(null);
  const [level, setLevel] = useState<number | null>(null);
  const [subUnit, setSubUnit] = useState<string | null>(null);
  const [size, setSize] = useState<number>(20); 
  const [page, setPage] = useState<number>(0);
  const [selection, setSelection] = useState("");
  // console.log(`Page from Filter: ${page}`) 

  return (
    <FilterContext.Provider value={{ parts, setParts, level, setLevel, subUnit, setSubUnit, size, setSize, page, setPage, selection, setSelection }}>
      {children}
    </FilterContext.Provider>
  );
};

