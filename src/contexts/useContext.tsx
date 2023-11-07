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


  React.useEffect(() => {
    const elementToObserve = document.getElementById("featuredWorks");

    // se o elemento estiver acima da área preta, seta o estado para true
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAboveBlackArea(false);
          console.log("false");
        } else {
          setIsAboveBlackArea(true);
          console.log("true");
        }
      });
    });

    // observa o elemento
    if (elementToObserve) observer.observe(elementToObserve);

    // para de observar o elemento
    return () => {
      if (elementToObserve) observer.unobserve(elementToObserve);
    };
  }, []);

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
