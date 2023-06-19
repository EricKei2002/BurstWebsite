import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import desktopVideo from "../../assets/images/top.mp4";
import mobileVideo from "../../assets/images/top-mobile.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VideoContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundVideo = styled("video")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Text = styled(motion.div)`
  position: absolute;
  top: ${props => props.isMobile ? "75%" : "75%"};
  left: ${props => props.isMobile ? "50%" : "33%"};
  transform: translate(-50%, -50%);
  font-size: ${props => props.isMobile ? "1em" : "3em"};
  color: inherit;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Top = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <VideoContainer>
      <BackgroundVideo autoPlay muted loop>
        <source src={isMobile ? mobileVideo : desktopVideo} type="video/mp4" />
      </BackgroundVideo>
      <StyledLink to="/logo">
      <Text
  isMobile={isMobile}
  initial={{ opacity: 0, y: isMobile ? -20 : -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5 }}
>
          BURSTでLogoを作成しよう
        </Text>
      </StyledLink>
    </VideoContainer>
  );
};

export default Top;
