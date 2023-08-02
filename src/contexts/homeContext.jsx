import { createContext, useState } from "react";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [home, setHome] = useState("On");
  const [searcher, setSearcher] = useState("Off");
  const [user, setUser] = useState("Off");

  const handleHome = () => {
    setHome("On");
    setSearcher("Off");
    setUser("Off");
  };

  const handleSearcher = () => {
    setHome("Off");
    setSearcher("On");
    setUser("Off");
  };

  const handleUser = () => {
    setHome("Off");
    setSearcher("Off");
    setUser("On");
  };

  return (
    <HomeContext.Provider
      value={{
        home,
        setHome,
        searcher,
        setSearcher,
        user,
        setUser,
        handleHome,
        handleSearcher,
        handleUser,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export { HomeProvider, HomeContext };
