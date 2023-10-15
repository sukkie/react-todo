import { createContext, useContext, useState } from "react";
import {
  executeBasicAuthenticationService,
  executeJwtAuthenticationService,
} from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

// 1. Create Context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// 2. Share the created context with other components
export default function AuthProvider({ children }) {
  // 3. Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  const [token, setToken] = useState(null);

  // setInterval(() => setNumber(number + 1), 10000);

  const valueTobeShared = {
    isAuthenticated,
    username,
    token,
    login,
    logout,
  };

  // function login(username, password) {
  //   if (username !== "" && password === "1234") {
  //     setUsername(username);
  //     setAuthenticated(true);
  //     return true;
  //   } else {
  //     setUsername(null);
  //     setAuthenticated(false);
  //     return false;
  //   }
  // }

  async function login(username, password) {
    try {
      const response = await executeJwtAuthenticationService(
        username,
        password
      );

      console.log(response.status);
      if (response.status === 200) {
        const jwtToken = "Bearer " + response.data.token;
        setUsername(username);
        setAuthenticated(true);
        setToken(jwtToken);

        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          config.headers.Authorization = jwtToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  // async function login(username, password) {
  //   const baToken = "Basic " + window.btoa(username + ":" + password);

  //   try {
  //     const response = await executeBasicAuthenticationService(baToken);

  //     console.log(response.status);
  //     if (response.status === 200) {
  //       setUsername(username);
  //       setAuthenticated(true);
  //       setToken(baToken);

  //       apiClient.interceptors.request.use((config) => {
  //         console.log("intercepting and adding a token");
  //         config.headers.Authorization = baToken;
  //         return config;
  //       });

  //       return true;
  //     } else {
  //       logout();
  //       return false;
  //     }
  //   } catch (error) {
  //     logout();
  //     return false;
  //   }
  // }

  function logout() {
    setAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={valueTobeShared}>
      {children}
    </AuthContext.Provider>
  );
}
