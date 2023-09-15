import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import desktopVideo from "/home/burst/BurstWebSite/src/assets/images/HP MOVIE2.mp4";
import portfolioImage from "/home/burst/BurstWebSite/src/assets/images/S__71622688_0.jpg";
import portfolioImage2 from "/home/burst/BurstWebSite/src/assets/images/S__71622690_0.jpg";
import portfolioImage3 from "/home/burst/BurstWebSite/src/assets/images/S__71622691_0.jpg";
import portfolioImage4 from "/home/burst/BurstWebSite/src/assets/images/S__71622692_0.jpg";

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
    // 現在の画像のインデックスを管理するための状態変数
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // ポートフォリオの画像の配列
    const portfolioImages = [portfolioImage, portfolioImage2, portfolioImage3, portfolioImage4];
  
    // 5秒ごとに画像を切り替える
    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
      }, 2000);
  
      // クリーンアップ関数
      return () => {
        clearTimeout(timer);
      };
    }, [currentImageIndex]);

  const videoContainerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "visible",
    zIndex: -1,
    marginBottom: "5%" // この行を追加して次のセクションとの間に間を空ける
  };

  const achievementsTextStyle = {
    textAlign: "center",
    fontSize: "2em",
    fontWeight: "bold",
    color: "#FFF",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    background: "rgba(0, 0, 0, 0.7)",
    padding: "10px 20px",
    borderRadius: "5px",
    marginTop: "2%",
    marginBottom: "2%"
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
    fontSize: "2em",
    fontWeight: "bold"
  };

  const portfolioImageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",  // 幅を70%に設定
    height: "70vw",  // 例として高さを500pxに固定。必要に応じて調整してください。
    objectFit: "cover",  // 画像がボックスにフィットするように設定
    boxShadow: "0px 4px 8px rgba(0,0,0,0.5)",
    marginBottom: "5%"
};

  return (
    <Box>
      <Box style={videoContainerStyle} className={`${isMobile ? 'mobile' : 'desktop'}`}>
        <div style={{ ...textStyle, top: "4%" }}>
          <p>笑顔をイメージしたデザインやクスッと笑えるようなアイデア性で</p>
        </div>
        <video style={backgroundVideoStyle} autoPlay muted loop>
          <source src={desktopVideo} type="video/mp4" />
        </video>
        <div style={{ ...textStyle, bottom: "4%" }}>
          <p>見た人や関わる人の笑顔を作ることを理念に活動しています。</p>
        </div>
      </Box>
      <div style={achievementsTextStyle}>
        <p>作品実績</p>
      </div>
      <img src={portfolioImages[currentImageIndex]} alt="ポートフォリオの画像" style={portfolioImageStyle} />
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


