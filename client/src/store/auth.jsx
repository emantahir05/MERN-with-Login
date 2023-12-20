import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([]);

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedin = !!token;
  console.log("Token Value is", isLoggedin);

  // logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT authentication getting user data of loggedin user

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("User data", data.userData);
        setUser(data.userData);
      } else {
        console.error("Error Fetching the data");
      }
    } catch (error) {
      console.error("Error Fetching the data", error);
    }
  };

  // get services

  const getServices = async () => {
    const URL = "http://localhost:5000/api/data/service";
    try {
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.error(`Error from services ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedin, storeTokenInLS, LogoutUser, user, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
