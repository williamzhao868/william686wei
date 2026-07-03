import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentAdmin, setCurrentAdmin] = useState(pb.authStore.model);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial load state
    setCurrentAdmin(pb.authStore.model);
    setIsLoading(false);

    // Listen to auth store changes
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setCurrentAdmin(model);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const authData = await pb.collection('admins').authWithPassword(email, password, {
        $autoCancel: false
      });
      setCurrentAdmin(authData.record);
      return authData;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    pb.authStore.clear();
    setCurrentAdmin(null);
  };

  const value = {
    currentAdmin,
    isAuthenticated: !!currentAdmin,
    login,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);