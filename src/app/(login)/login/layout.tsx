"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container } from "@mui/material";
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
          <Container
            component="main"
            maxWidth="xs"
            sx={{
              minHeight: "calc( 100vh - 30px)",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Box>{children}</Box>
          </Container>
        </LoggedUserProvider>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
