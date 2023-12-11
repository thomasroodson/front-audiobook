"use client";
import { Box, Button, Container } from "@mui/material";
import { Footer } from "@/app/components/Footer";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  const handleLogout = () => {
    Cookie.remove("AUTH_TOKEN");
    Cookie.remove("USER");
    router.push("/login");
  };
  return (
    <html lang="pt-br">
      <body>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: 5
            }}
          >
            <Button onClick={handleLogout} variant="contained">
              Sair
            </Button>
          </Box>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
