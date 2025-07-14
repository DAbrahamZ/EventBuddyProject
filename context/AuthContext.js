import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { auth } from "../firebaseConfig";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);

      (async () => {
        if (currentUser) {
          const token = await currentUser.getIdToken();
          await SecureStore.setItemAsync("firebaseIdToken", token);
        } else {
          await SecureStore.deleteItemAsync("firebaseIdToken");
        }
      })();
    }); 

    return unsubscribe;
  }, []);

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};