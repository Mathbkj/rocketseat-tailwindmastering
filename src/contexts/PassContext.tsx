import { useEffect, useState, type Dispatch, type FC, type PropsWithChildren, type SetStateAction } from "react";
import { createContext } from "react";

interface PassContextProps {
  isToggled: boolean;
  setToggled:Dispatch<SetStateAction<boolean>>;
}

export const PassContext = createContext<PassContextProps>({
  isToggled: false,
  setToggled:()=>console.log("default log")
});

interface PassProviderProps extends PropsWithChildren {}

export const PassContextProvider: FC<PassProviderProps> = ({ children }) => {
  const [isToggled, setToggled] = useState<boolean>(false);

  useEffect(() => {
    isToggled === true
      ? console.log("Password is visible")
      : console.log("Password is not visible");
  }, [isToggled]);

  return (
    <PassContext.Provider value={{ isToggled, setToggled }}>
      {children}
    </PassContext.Provider>
  );
};
