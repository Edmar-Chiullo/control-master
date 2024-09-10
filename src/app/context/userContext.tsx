'use client'

import React, { createContext, useContext,      useState } from 'react';
import StackLabel from '@/lib/stackLabel';

interface StackLabelContextProps {
    stackLabel: StackLabel;
    setStackLabel: React.Dispatch<React.SetStateAction<StackLabel>>;
  }
  
  const StackLabelContext = createContext<StackLabelContextProps | undefined>(undefined);
  
  export const useStackLabelContext = () => {
    const context = useContext(StackLabelContext);
    if (!context) {
      throw new Error('useStackLabelContext must be used within a StackLabelProvider');
    }
    return context;
  };
  
  export const StackLabelProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const [stackLabel, setStackLabel] = useState(new StackLabel());
  
    return (
      <StackLabelContext.Provider value={{ stackLabel, setStackLabel }}>
        {children}
      </StackLabelContext.Provider>
    );
  };