import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const handleLogout = () => {
    Cookie.remove("AUTH_TOKEN");
    router.push("/login");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        mt: 5
      }}
    >
      <Typography
        padding={2}
        sx={{
          textTransform: "capitalize"
        }}
      >
        Olá {user?.username}
      </Typography>
      <Button onClick={handleLogout} variant="contained">
        Sair
      </Button>
    </Box>
  );
};
