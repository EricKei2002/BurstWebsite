import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxHeight: '10%',
  },
  footerContent: {
    flex: '1 0 auto',
  },
  footer: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#111',
  },
  footerText: {
    marginTop: 8,
    color: 'white',
    fontSize: 12,
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    '& li': {
      marginRight: 10,
      '&:last-child': {
        marginRight: 0,
      },
      '& a img': {
        transition: 'transform 0.3s ease',
        width: 50,
        height: 50,
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      },
    },
  },
}));

function SocialLinks() {
  const classes = useStyles();

  return (
    <ul className={classes.social}>
      <li>
        <a href="https://www.youtube.com/@user-yn3jr7yx1k">
          <img src="/youtube.png" alt="YouTube Icon" />
        </a>
        <span className={classes.footerText}>YouTube</span>
      </li>
      <li>
        <a href="#">
          <img src="/twitter2.png" alt="Twitter Icon" />
        </a>
        <span className={classes.footerText}>Twitter</span>
      </li>
      <li>
        <a href="https://www.instagram.com/burst_0000_8888/">
          <img src="/instagram2.png" alt="Instagram Icon" />
        </a>
        <span className={classes.footerText}>Instagram</span>
      </li>
    </ul>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerContent}>
        <AppBar style={{ position: 'fixed', bottom: '0' }} component="footer" position="static" sx={{ backgroundColor: '#111' }}>
          <Container maxWidth="md">
            <Box sx={{ textAlign: 'center' }}>
              <div className={classes.footer}>
                <SocialLinks />
                <Typography variant="caption" className={classes.footerText}>
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
