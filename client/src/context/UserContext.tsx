import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ILoggedInUser } from "../models/loggedInUser";

interface IUserContext {
  user: ILoggedInUser | undefined;
  isLoggedIn: boolean;
  setLoggedInUser: (user: ILoggedInUser) => void;
  logout: () => void;
}

const initialValues = {
  user: undefined,
  isLoggedIn: false,
  setLoggedInUser: () => {},
  logout: () => {},
};

export const UserContext = createContext<IUserContext>(initialValues);
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<ILoggedInUser | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLoggedInUser = (user: ILoggedInUser) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setLoggedInUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
