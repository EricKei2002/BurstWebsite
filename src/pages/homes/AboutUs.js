import React, { useState, useEffect } from "react";
import backgroundImage from "../../images/background.jpg";// 画像をインポート

const AboutUs = () => {
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(20);

  useEffect(() => {
    const animationDuration = 1000; // 1s

    const opacityInterval = setInterval(() => {
      setOpacity((prevOpacity) => Math.min(prevOpacity + 0.02, 1));
    }, animationDuration / 50); 

    const translateYInterval = setInterval(() => {
      setTranslateY((prevTranslateY) => Math.max(prevTranslateY - 0.4, 0));
    }, animationDuration / 50);

    return () => {
      clearInterval(opacityInterval);
      clearInterval(translateYInterval);
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Zen Maru Gothic',
    backgroundImage: `url(${backgroundImage})`, // 背景画像を設定
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover', // 画像をカバーサイズに設定
    backgroundPosition: 'center', // 画像を中央に配置
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px'
  };

  const introTextStyle = {
    fontSize: '1.5rem',
    opacity: opacity,
    transform: `translateY(${translateY}px)`,
    transition: 'all 0.02s',
    backgroundColor: 'transparent',
    padding: '10px',
    borderRadius: '5px'
};


  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>About Us</h1>
      <p style={introTextStyle}>
        私たちは長野県白馬村で出会い、<br />
        同じ目標があり結成されたグループです。
      </p>
    </div>
  );
};

export default AboutUs;
