import React, {createContext, useEffect, useState} from 'react';
import {useWindowSize} from "rooks";

export const GlobalContext = createContext({ windowType: '', windowWidth: 0, windowHeight: 0, breakType: "",  winSizes: {}});

export function GlobalContextProvider({ children }) {

const { innerWidth, innerHeight} = useWindowSize()

const [windowWidth, setWindowWidth] = useState(innerWidth);
const [windowHeight, setWindowHeight] = useState(innerHeight);

const winSizes = {
    xxl: 1400,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576
  };

const breakType = "md";

const deviceType = Object.keys(winSizes).reduce((previous, current) => {

  if (typeof window === "undefined") { /* we're on the server */ }
  else {
    if (winSizes[previous] <= window.innerWidth)
      return previous
  }
  previous = current
  return previous
}, {});

const [windowType, setWindowType] = useState(deviceType);
    
useEffect(() => {

  const resizeWindow=()=> {
    setWindowType(deviceType);
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  window.addEventListener("resize", resizeWindow)
  return () => window.removeEventListener("resize", resizeWindow);
}, [deviceType, windowWidth, windowHeight]);

return (
  <GlobalContext.Provider value={{windowType, windowWidth, windowHeight, breakType, winSizes}}>
    {children}
  </GlobalContext.Provider>
);
};