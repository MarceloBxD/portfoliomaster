"use client";

import React, { createContext, useContext } from "react";

type ContextProps = {
  isAboveBlackArea: boolean;
  setIsAboveBlackArea: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext({} as ContextProps);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isAboveBlackArea, setIsAboveBlackArea] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  const value = {
    isAboveBlackArea,
    setIsAboveBlackArea,
    openMenu,
    setOpenMenu,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);

  return context;
}
