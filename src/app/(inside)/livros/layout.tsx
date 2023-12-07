import { Footer } from "@/app/components/Footer";
import { Box, Container } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Container component="main">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
