import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import desktopVideo from "/home/burst/BurstWebSite/src/assets/images/HP MOVIE2.mp4";

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

  const videoContainerStyle = {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    zIndex: -1
  };

  const backgroundVideoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  };

  const textStyle = {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
    fontSize: "2em",  // フォントサイズを大きく
    fontWeight: "bold" // テキストを太く
  };

  return (
    <Box style={videoContainerStyle} className={`${isMobile ? 'mobile' : 'desktop'}`}>
      {/* 上部のテキスト */}
      <div style={{ ...textStyle, top: "5%" }}>
        <p>笑顔をイメージしたデザインやクスッと笑えるようなアイデア性で</p>
      </div>

      {/* ビデオ */}
      <video style={backgroundVideoStyle} autoPlay muted loop>
        <source src={desktopVideo} type="video/mp4" />
      </video>

      {/* 下部のテキスト */}
      <div style={{ ...textStyle, bottom: "5%" }}>
        <p>見た人や関わる人の笑顔を作ることを理念に活動しています。</p>
      </div>

      <Link className="styled-link" to="/logo">
        <motion.div 
          className={`text ${isMobile ? 'mobile' : 'desktop'}`}
          initial={{ opacity: 0, y: isMobile ? -20 : -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
        </motion.div>
      </Link>
    </Box>
  );
};

export default Top;



