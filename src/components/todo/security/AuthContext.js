import { createContext, useContext, useState } from "react";

// 1. Create Context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// 2. Share the created context with other components
export default function AuthProvider({ children }) {
  // 3. Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  // setInterval(() => setNumber(number + 1), 10000);

  const valueTobeShared = {
    isAuthenticated,
    username,
    login,
    logout,
  };

  function login(username, password) {
    if (username !== "" && password === "1234") {
      setUsername(username);
      setAuthenticated(true);
      return true;
    } else {
      setUsername(null);
      setAuthenticated(false);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={valueTobeShared}>
      {children}
    </AuthContext.Provider>
  );
}
