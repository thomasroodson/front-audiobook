import { redirect } from "next/navigation";

// Redireciona para a página Livros

export async function GET(request: Request) {
  redirect("/livros");
}

//Rotas

export const APP_ROUTES = {
  private: {
    livros: {
      name: "/livros"
    },
    livro: {
      name: "/livros/:slug"
    }
  },
  public: {
    login: "/login",
    forget: "/login/:slug"
  }
};
