import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite";
import { OAuthProvider } from "appwrite";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // STATES
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  // FUNCTIONS
  const login = () => {
    console.log("logging in...");
    account.createOAuth2Session(
      OAuthProvider.Discord, // provider
      "http://adrionic.xyz", // full URL for success redirect
      "http://adrionic.xyz" // full URL for failure redirect
    );
  };
  const logout = () => {
    console.log("logging out...");
    account.deleteSession("current");
    setIsAuthenticated(false);
    setUser(null);
  };
  useEffect(() => {
    const getSession = async () => {
      try {
        const session = await account.getSession("current");
        setIsAuthenticated(true);
        setUser(session.providerAccessToken);

        fetch("https://discord.com/api/users/@me", {
          headers: {
            Authorization: `Bearer ${session.providerAccessToken}`,
          },
        })
          .then((response) => response.json())
          .then((user) => {
            setUser(user);
          })
          .catch((error) => console.error("Error:", error));
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      }
    };
    getSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
