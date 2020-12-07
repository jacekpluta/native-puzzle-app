import React, { createContext, useState } from "react";

export const AuthContext = createContext(null as any);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          try {
          } catch (e) {
            console.log(e);
          }
        },

        register: async (email: string, password: string) => {
          try {
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
