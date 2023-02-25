import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

import type { UserType } from "types/User";

export type SessionUserType = {
  token: string;
} & UserType;

export type SessionType = {
  user: SessionUserType | null;
  isLogin: boolean;
  signIn: (email: UserType["email"], password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const SessionContext = React.createContext<SessionType>({} as SessionType);

export default function useSession() {
  const context = useContext(SessionContext);
  return context;
}

type SessionProviderProps = {
  children: React.ReactNode;
};

export function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUser] = useState<SessionType["user"]>(null);

  async function handleSignIn(email: UserType["email"], password: string) {
    await new Promise((resolv) => setTimeout(resolv, 1000));
    setUser({
      id: "5e9d49ca-a86c-4785-81a3-d20063304f3a",
      email: email,
      name: "Hamaro",
      token: "789f5858-0949-4871-8832-f471ffa30780",
    });
    toast.success("Login has success");
  }

  async function handleSignOut() {
    await new Promise((resolv) => setTimeout(resolv, 1000));
    setUser(null);
    toast.success("Logout success");
  }

  const isLogin = !!user?.id;

  return (
    <SessionContext.Provider
      value={{
        user: user,
        isLogin,
        signIn: handleSignIn,
        signOut: handleSignOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}
