import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { DB_URL } from '../config';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [username,setUsername]=useState("username");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  axios.defaults.withCredentials = true;


  useEffect(() => {
    // const cookies = document.cookie.split(";");
    // for (let cookie of cookies) {
    //   const [key, value] = cookie.trim().split("=");
    //   if (key === "username") setUsername(value);
    // }
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const res = await axios.get(`${DB_URL}/me`, { withCredentials: true });
      setUsername(res.data.name)
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const res = await axios.post(
        `${DB_URL}/login`,
        { email, password },
        { withCredentials: true }
      );

      await checkAuthStatus(); 
      if(res.data.username){
        setUsername(res.data.username);
      }

      return { success: true, message: "Login successful" };
    } catch (err) {
      console.log(err.response.data.Message)
      const errorMessage = err.response?.data?.Message || "Login failed. Try again.";
      return { success: false, message: errorMessage };
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${DB_URL}/logout`, {}, { withCredentials: true });
      setIsAuthenticated(false);
      return { success: true, message: "Logout successful" };
    } catch {
      return { success: false, message: "Logout failed" };
    }
  };

  const value = {
    isAuthenticated,
    loading,
    handleLogin,
    handleLogout,
    checkAuthStatus,
    username
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
