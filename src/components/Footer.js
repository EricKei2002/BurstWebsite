import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import './Footer.css';

function SocialLinks() {
  return (
    <ul className="social">
      <li>
        <a href="https://www.youtube.com/@user-yn3jr7yx1k">
          <img src="/youtube.png" alt="YouTube Icon" />
        </a>
        <span className="footer-text">YouTube</span>
      </li>
      <li>
        <a href="#">
          <img src="/twitter2.png" alt="Twitter Icon" />
        </a>
        <span className="footer-text">Twitter</span>
      </li>
      <li>
        <a href="https://www.instagram.com/burst_0000_8888/">
          <img src="/instagram2.png" alt="Instagram Icon" />
        </a>
        <span className="footer-text">Instagram</span>
      </li>
    </ul>
  );
}

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <AppBar component="footer" position="static" sx={{ backgroundColor: '#111' }}>
          <Container maxWidth="md">
            <Box sx={{ textAlign: 'center' }}>
              <div className="footer">
                <SocialLinks />
                <Typography variant="caption" className="footer-text">
                  ©2023 BURST
                </Typography>
              </div>
            </Box>
          </Container>
        </AppBar>
      </div>
    </div>
  );
};

export default Footer;
