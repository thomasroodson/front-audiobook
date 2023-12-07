import { Container, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";

export const Footer = () => {
  const Copyright = (props: any) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        <MuiLink color="inherit" href="/" component={Link}>
          SBE Shop
        </MuiLink>{" "}
        | Todos os direitos reservados {new Date().getFullYear()}
      </Typography>
    );
  };

  return (
    <Container component="footer" fixed>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
