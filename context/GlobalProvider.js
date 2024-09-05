import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          console.log("Getting user results🟢");
          setIsLogged(true);
          setUser(res);
          console.log(res);
        } else {
          console.log("Not getting user results🔴");
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        console.log(
          `isLogged: ${isLogged}, ` +
            `setIsLogged: ${typeof setIsLogged}, ` +
            `user: ${JSON.stringify(user)}, ` +
            `setUser: ${typeof setUser}, ` +
            `loading: ${loading}`
        );
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
