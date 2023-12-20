import { Container, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Container component="footer" fixed>
      <Typography variant="body2" color="text.secondary" align="center">
        <MuiLink color="inherit" href="/" component={Link}>
          SBE Shop
        </MuiLink>{" "}
        | Todos os direitos reservados {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Footer;
