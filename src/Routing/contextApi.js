import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();

export default ({ children }) => {
  const prevUser =
    (window.localStorage.getItem("user") &&
      JSON.parse(window.localStorage.getItem("user"))) ||
    "";

  const [user, setUser] = useState(prevUser);

  useEffect(() => {
    if (!user) console.log("");
    else window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const defaultContext = {
    setUser,
    user,
  };
  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  );
};
