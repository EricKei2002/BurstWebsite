import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@material-ui/core/styles';
import YouTubeIcon from '../assets/images/youtube.png';
import TwitterIcon from '../assets/images/twitter2.png';
import TwitterHoveredIcon from '../assets/images/twitter-hovered.png';
import InstagramIcon from '../assets/images/instagram2.png';


const useStyles = makeStyles((theme) => ({

  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: 1,
  },
  footer: {
    backgroundColor: 'white',
    padding: 16,
    textAlign: 'center',
  },
  footerText: {
    marginTop: 1,
    color: 'black',
    fontSize: 15,
  },
  social: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    '& li': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: 50,
      '&:last-child': {
        marginRight: 50,
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
  const [twitterHovered, setTwitterHovered] = useState(false); // ホバー状態を追跡するための状態

  return (
    <ul className={classes.social}>
      <li>
        <a href="https://www.youtube.com/@burst0000">
          {/* 2. インポートした画像を使用 */}
          <img src={YouTubeIcon} alt="YouTube Icon" />
        </a>
        <span className={classes.footerText}>YouTube</span>
      </li>
      <li
        onMouseEnter={() => setTwitterHovered(true)}
        onMouseLeave={() => setTwitterHovered(false)}
      >
        <a href="https://twitter.com/chicken0216">
          <img
            src={twitterHovered ? TwitterHoveredIcon : TwitterIcon}
            alt="Twitter Icon"
          />
        </a>
        <span className={classes.footerText} style={{color: twitterHovered ? 'black' : 'black'}}>
        {twitterHovered ? "   X   " : "Twitter"}
        </span>
      </li>
      <li>
        <a href="https://www.instagram.com/burst_0000_8888/">
          <img src={InstagramIcon} alt="Instagram Icon" />
        </a>
        <span className={classes.footerText}>Instagram</span>
      </li>
    </ul>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar component="footer" position="static" sx={{ backgroundColor: 'white' }}>
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
  );
};


export default Footer;
