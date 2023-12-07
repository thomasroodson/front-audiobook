import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, Link as MuiLink, Typography } from "@mui/material";
import { Footer } from "@/app/components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="pt-br">
      <body>
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
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
