import React, { createContext, useState } from "react";
import { LoginWithToken, RegisterWithToken } from "../services/Auth";
import { GetUserByToken } from "../services/User";

export const AuthContext = createContext(null as any);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log(errorMessage, "dsdas");
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        errorMessage,
        getUser: async (token: string) => {
          try {
            const result = await GetUserByToken(token);

            if (result.status === 200 && result.token) {
              window.localStorage.setItem("token", result.token);
            } else {
              setError(true);
              setErrorMessage(result.message);
            }
          } catch (err) {
            setError(true);
            setErrorMessage(
              "Unknown error. Please reload the page and try again."
            );
          }
        },

        login: async (username: string, password: string) => {
          try {
            const result = await LoginWithToken(username, password);

            if (result.status === 200 && result.token) {
              window.localStorage.setItem("token", result.token);
            } else {
              setError(true);
              setErrorMessage(result.message);
            }
          } catch (err) {
            setError(true);
            setErrorMessage(
              "Unknown error. Please reload the page and try again."
            );
          }
        },

        register: async (username: string, password: string) => {
          try {
            const result = await RegisterWithToken(username, password);

            if (result.status === 200 && result.token) {
              window.localStorage.setItem("token", result.token);
            } else {
              setError(true);
              setErrorMessage(result.message);
            }
          } catch (err) {
            setError(true);
            setErrorMessage(
              "Unknown error. Please reload the page and try again."
            );
          }
        },
        logout: async () => {
          try {
            window.localStorage.deleteItem("token");
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
