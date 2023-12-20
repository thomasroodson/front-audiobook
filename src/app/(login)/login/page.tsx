"use client";
import Avatar from "@mui/material/Avatar";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Link as MuiLink,
  TextField,
  Typography
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { api } from "@/services/api";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const router = useRouter();

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailInput || !passwordInput) {
      setError("Preencha e-mail e senha!");
      return;
    }

    setError("");
    setLoading(false);

    await api
      .post("/api/auth/local", {
        identifier: emailInput,
        password: passwordInput
      })
      .then((response) => {
        Cookies.set("AUTH_TOKEN", response.data.jwt);
        router.push("/livros");
      })
      .catch((error) => {
        setLoading(false);
        setError("Login ou senha incorretas!");
      });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "calc(100vh - 37px)",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Faça seu login.
        </Typography>
        <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmailInput(e.target.value)}
            disabled={loading}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPasswordInput(e.target.value)}
            disabled={loading}
          />
          {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Entar"}
          </Button>
          <Grid container>
            <Grid item xs>
              <MuiLink href="/forgot" variant="body2" component={Link}>
                Esqueceu a senha?
              </MuiLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
