import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import LOGO from "../assets/logo.jpeg";
// import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar elevation={0} position="fixed" sx={{ background: "white" }}>
        <Container
          maxWidth=""
          // sx={{ display: "flex", justifyContent: "" }}
        >
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component="img"
              src={LOGO}
              alt="Logo"
              sx={{
                width: {
                  xs: 70,
                  md: 80,
                  lg: 100,
                },
                ml: { xs: 0, md: 3 },
              }}
            />

            <Typography
              variant="h4"
              sx={{
                flexGrow: 1,
                color: "black",
                fontWeight: 700,
                fontFamily: "sans-serif",
              }}
            ></Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                mr: 5,
              }}
            >
              <NavItem text="Home" onClick={() => handleScroll("home")} />
              <NavItem
                text="How we work"
                onClick={() => handleScroll("howwework")}
              />
              <NavItem
                text="Services"
                onClick={() => handleScroll("services")}
              />

              <NavItem text="Contact" onClick={() => handleScroll("contact")} />
            </Box>

            {/* Mobile Hamburger */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <Box sx={{ width: 190, mt: 1, pr: 1 }}>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: 700,
              pl: 1.5,
              mt: 2,
              fontFamily: "sans-serif",
            }}
          >
            {/* Codnexa */}
          </Typography>
          <img src={LOGO} width={"100px"} style={{ marginBottom: "-15px" }} />
          <List>
            {["Home", "How we work", "Services", "Contact"].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() =>
                  handleScroll(text.toLowerCase().replace(/\s+/g, ""))
                }
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

const NavItem = ({ text, onClick }) => (
  <Typography
    onClick={onClick}
    sx={{
      cursor: "pointer",
      fontWeight: 500,
      color: "black",
      "&:hover": {
        color: "primary.main",
      },
    }}
    variant="h6"
  >
    {text}
  </Typography>
);
