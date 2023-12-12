import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import { LoggedUserContext } from "@/contexts/LoggedUser";
import { useContext } from "react";

export const Navbar = () => {
  const loggedUser = useContext(LoggedUserContext);
  const router = useRouter();

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
        Olá {loggedUser?.currentUser.username}
      </Typography>
      <Button onClick={handleLogout} variant="contained">
        Sair
      </Button>
    </Box>
  );
};
