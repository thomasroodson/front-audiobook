import { redirect } from "next/navigation";

// Redireciona para a página Livros

export async function GET(request: Request) {
  redirect("/livros");
}
