import { createContext, ReactNode, useState } from "react";

type ContextType = {
  currentUser: {
    id?: number;
    username?: string;
    email?: string;
  };
  setCurrentUser(userData: object): void;
};

export const LoggedUserContext = createContext<ContextType | null>(null);

export const LoggedUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <LoggedUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </LoggedUserContext.Provider>
  );
};
