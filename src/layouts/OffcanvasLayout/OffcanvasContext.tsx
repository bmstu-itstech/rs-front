// OffcanvasContext.tsx
import React, {createContext, useContext, useState} from 'react';
interface OffcanvasContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const OffcanvasContext = createContext<OffcanvasContextProps | undefined>(undefined);
export const OffcanvasProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OffcanvasContext.Provider value={{isOpen, setIsOpen}}>{children}</OffcanvasContext.Provider>
  );
};
export const useOffcanvas = () => {
  const context = useContext(OffcanvasContext);
  if (!context) {
    throw new Error('useOffcanvas must be used within an OffcanvasProvider');
  }
  return context;
};
