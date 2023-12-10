"use client";
import { checkIsPublicRoute } from "@/app/Utils/Auth";
import { usePathname } from "next/navigation";
import { Container } from "@mui/material";
import { Footer } from "@/app/components/Footer";
import PrivateRoute from "@/app/components/PrivateRoute";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname);

  return (
    <>
      <Container component="main">
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
