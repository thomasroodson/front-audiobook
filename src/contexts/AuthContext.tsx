import { ReactNode, createContext, useState } from "react";
import { api } from "@/Utils/api";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  username: string;
  email: string;
  livros?: [];
};

type SignInData = {
  identifier: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  async function signIn({ identifier, password }: SignInData) {
    const response = await api.post("/api/auth/local", {
      identifier,
      password
    });

    Cookie.set("AUTH_TOKEN", response.data.jwt);

    setUser(response.data.user);

    router.push("/livros");
  }
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
