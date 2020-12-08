import React, { createContext, useState } from "react";
import { LoginWithToken, RegisterWithToken } from "./Auth";
import { GetUserByToken } from "./User";

export const AuthContext = createContext(null as any);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState("");
  const [isError, setIsError] = useState({ data: true, errorMessage: "" });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isError,
        getUser: async (token: string) => {
          try {
            const result = await GetUserByToken(token);

            if (result.status === 200 && result.token) {
              window.localStorage.setItem("token", result.token);
              setIsError({
                data: false,
                errorMessage: "",
              });
            } else {
              setIsError({ data: true, errorMessage: result.message });
            }
          } catch (err) {
            setIsError({
              data: true,
              errorMessage:
                "Unknown error. Please reload the page and try again.",
            });
          }
        },

        login: async (username: string, password: string) => {
          try {
            const result = await LoginWithToken(username, password);

            if (result.status === 200 && result.token) {
              window.localStorage.setItem("token", result.token);
              setIsError({
                data: false,
                errorMessage: "",
              });
            } else {
              setIsError({
                data: true,
                errorMessage:
                  "Unknown error. Please reload the page and try again.",
              });
            }
          } catch (err) {
            setIsError({
              data: true,
              errorMessage:
                "Unknown error. Please reload the page and try again.",
            });
          }
        },

        register: async (username: string, password: string) => {
          try {
            const result = await RegisterWithToken(username, password);

            if (result.status === 200 && result.token) {
              window.localStorage.setItem("token", result.token);
              setIsError({
                data: false,
                errorMessage: "",
              });
            } else {
              setIsError({
                data: true,
                errorMessage:
                  "Unknown error. Please reload the page and try again.",
              });
            }
          } catch (err) {
            setIsError({
              data: true,
              errorMessage:
                "Unknown error. Please reload the page and try again.",
            });
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
