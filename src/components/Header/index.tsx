"use client";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { MouseEvent, useState } from "react";
import { blue } from "@mui/material/colors";

type Props = {
  username?: string;
};

export const Header = ({ username }: Props) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("AUTH_TOKEN");
    router.push("/login");
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#fcfdfb"
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center"
        }}
      >
        <Typography
          padding={2}
          sx={{
            textTransform: "capitalize",
            color: "#000"
          }}
          pt="20px"
        >
          {!!username && username}
        </Typography>
        <div>
          <IconButton
            size="medium"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="primary"
            sx={{ bgcolor: blue[50] }}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            sx={{ top: 28 }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Deseja sair?</MenuItem>
          </Menu>
        </div>
      </Container>
    </AppBar>
  );
};
