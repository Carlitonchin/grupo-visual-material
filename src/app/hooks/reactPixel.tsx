"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface props {
  setReactPixel: (a: any) => void;
  reactPixel: any;
}

const ReactPixelContext = createContext<props>({
  setReactPixel: (a) => {},
  reactPixel: null,
});

export const ReactPixelProvider = ({ children }: { children: any }) => {
  const [reactPixel, setReactPixel] = useState(null);

  return (
    <ReactPixelContext.Provider
      value={{
        reactPixel,
        setReactPixel,
      }}
    >
      {children}
    </ReactPixelContext.Provider>
  );
};

export const useReactPixel = () => {
  return useContext(ReactPixelContext);
};
