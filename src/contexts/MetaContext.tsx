import { createContext, useState, useEffect, ReactNode } from "react";

type MetaContextType = {
  montante: number;
  setMontante: React.Dispatch<React.SetStateAction<number>>;
  hasMontante: boolean;
  setHasMontante: React.Dispatch<React.SetStateAction<boolean>>;
};

type MetaData = {
  montante: number;
  hasMontante: boolean;
};

type MetaContextProviderProps = {
  children: ReactNode;
};

export const MetaContext = createContext<MetaContextType>(
  {} as MetaContextType
);

export function MetaContextProvider({ children }: MetaContextProviderProps) {
  const [montante, setMontante] = useState<number>(0);
  const [hasMontante, setHasMontante] = useState<boolean>(false);

  useEffect(() => {
    const storedData = localStorage.getItem("dados");
    if (storedData) {
      const data: MetaData = JSON.parse(storedData);
      setMontante(data.montante);
      setHasMontante(data.hasMontante);
    }
  }, []);

  useEffect(() => {
    const data: MetaData = {
      montante: montante >= 0 ? montante : 0,
      hasMontante,
    };
    localStorage.setItem("dados", JSON.stringify(data));
  }, [montante, hasMontante]);

  return (
    <MetaContext.Provider value={{ montante, setMontante, hasMontante, setHasMontante }}>
      {children}
    </MetaContext.Provider>
  );
}
