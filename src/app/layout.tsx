import { ReactNode } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt-br">
      <body>
        <Container component="main">{children}</Container>
      </body>
    </html>
  );
};

export default Layout;
