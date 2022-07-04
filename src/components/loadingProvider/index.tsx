import { createContext, ReactNode, useContext, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { css } from "@emotion/react";     

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const isLoading: boolean = false;

const LoadingContext = createContext<boolean>(isLoading);

type Props = {
  children: ReactNode;
}

export function useSpinner() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }: Props) {
  let [color, setColor] = useState("#ffffff");

  return (
    <>
      <LoadingContext.Provider value={isLoading}>
        {children}
        <PulseLoader
            color={color} 
            loading={isLoading} 
            css={override} 
            size={150}
        />
      </LoadingContext.Provider>
    </>
  )
}