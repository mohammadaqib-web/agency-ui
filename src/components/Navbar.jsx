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
import CloseIcon from "@mui/icons-material/Close";

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
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h4"
              sx={{ flexGrow: 1, color: "black", fontWeight: 700 }}
            >
              CodNexa
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
              }}
            >
              <NavItem text="Home" onClick={() => handleScroll("home")} />
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
            sx={{ color: "black", fontWeight: 700, pl: 1.5, mt: 2 }}
          >
            CodNexa
          </Typography>
          <List>
            {["Home", "Services", "Contact"].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => handleScroll(text.toLowerCase())}
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
  >
    {text}
  </Typography>
);
