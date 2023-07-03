import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './Top.css';
import desktopVideo from "../../assets/images/top.mp4";
import mobileVideo from "../../assets/images/p6.mp4";

const Top = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 440);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box className={`video-container ${isMobile ? 'mobile' : 'desktop'}`}>
      <video className="background-video" autoPlay muted loop>
        <source src={isMobile ? mobileVideo : desktopVideo} type="video/mp4" />
      </video>
      <Link className="styled-link" to="/logo">
        <motion.div 
          className={`text ${isMobile ? 'mobile' : 'desktop'}`}
          initial={{ opacity: 0, y: isMobile ? -20 : -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          BURSTでLogoを作成しよう
        </motion.div>
      </Link>
    </Box>
  );
};

export default Top;
