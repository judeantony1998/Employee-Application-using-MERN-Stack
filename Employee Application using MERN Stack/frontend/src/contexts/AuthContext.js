import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    user: null
  });

  useEffect(() => {
    if (authState.token) {
      axios.get('/api/auth', {
        headers: {
          Authorization: `Bearer ${authState.token}`
        }
      }).then(res => {
        setAuthState({ ...authState, user: res.data });
      }).catch(err => {
        setAuthState({ ...authState, token: null });
      });
    }
  }, [authState.token]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
