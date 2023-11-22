import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useState(false);
  const value = [user, setUser];
  return <UserContext.Provider value={value} {...props}></UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  console.log(context);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a CountProvider");
  return context;
}

export { UserProvider, useUser };
