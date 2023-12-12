"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { Navbar } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { LoggedUserProvider } from "@/contexts/LoggedUser";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="pt-br">
      <body>
        <LoggedUserProvider>
          <Container>
            <Navbar />
            {children}
          </Container>
        </LoggedUserProvider>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
