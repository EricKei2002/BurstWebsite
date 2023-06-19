import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Logo from "../assets/images/BURST logo.jpg";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

const setNavLinks = [
  { text: "Top", url: "/" },
  { text: "AboutUs", url: "/AboutUs" },
  { text: "Goods", url: "/Goods" },
  { text: "Logo", url: "/Logo" },
  { text: "Contact", url: "/contact" },
  { text: "Vlog", url: "/Vlog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
 
  const handleDrawerOpen = () => {
      setOpen(true);
  }

  const handleDrawerClose = () => {
      setOpen(false);
  }
  return (
    <>
      <AppBar component="header" position="static" sx={{ backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography component="h1">
                <Link to="/">
                  <img src={Logo} alt="burst" height="60" width="auto" />
                </Link>
              </Typography>
            </Box>
            <Box>
              <List component="nav" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerOpen} sx={{ textAlign: 'center', display: { xs: 'block', md: 'none' } }}>
                                    <ListItemText primary={<MenuIcon sx={{ color: '#000000' }}/>} />
                                </ListItemButton>
                            </ListItem>
                            { setNavLinks.map( (navLink) => (
                            <ListItem disablePadding>
                                <ListItemButton sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } , color: 'black',marginRight: 2}} component={Link} to={navLink.url}>
                                    <ListItemText primary={navLink.text} primaryTypographyProps={{ letterSpacing: 2 }} />
                                </ListItemButton>
                            </ListItem>
                ))}
              </List>
            </Box>
            <Drawer anchor="right" open={open} onClose={handleDrawerClose} PaperProps={{ style: { width: '100%' } }}>
                        <List component="nav" sx={{ display: 'block', justifyContent: 'normal' }}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleDrawerClose} sx={{ textAlign: 'center', borderBottom: "solid 1px #696969" }}>
                                    <ListItemText primary={<CloseIcon />} />
                                </ListItemButton>
                            </ListItem>
                            { setNavLinks.map( (navLink) => (
                            <ListItem disablePadding>
                                <ListItemButton onClick={handleDrawerClose} sx={{ textAlign: 'center', borderBottom: "solid 1px #696969" }} component={Link} to={navLink.url}>
                                    <ListItemText primary={navLink.text} />
                                </ListItemButton>
                            </ListItem>
                            ))}
                        </List>
                    </Drawer>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
