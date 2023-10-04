"use client";
import { createContext, useEffect, useState, useContext } from "react";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }) => {
  const [dataUsers, setDataUsers] = useState([]);

  const addUser = (data) => {
    setDataUsers([
      ...dataUsers,data
    ]);
  };

  return (
    <UserContext.Provider
      value={{
        dataUsers,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
