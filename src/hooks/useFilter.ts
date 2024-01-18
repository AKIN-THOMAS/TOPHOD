// Create a custom hook for accessing the context

import { useContext } from 'react';
import { FilterContext } from '@/context/FilterContext'
import { FilterContextProps } from '@/@types';

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }

  return context as FilterContextProps;
};