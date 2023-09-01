import React, { useState, useEffect, useRef } from "react";
import member1Image from "../../assets/images/HP写真.png";
import member2Image from "../../assets/images/kei.jpg";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";


const AboutUs = () => {
  const introTextRef = useRef(null);  // テキスト要素の参照を取得
  const activityTextRef = useRef(null);
  const [introOpacity] = useState(1);
  const [activityOpacity] = useState(1);
  const introTextStyle = {
    fontSize: "3rem",
    opacity: introOpacity,
    transition: "opacity 1s, all 5s",
    marginBottom: "20rem" // この行を追加
  };
  const [hoveredLink, setHoveredLink] = useState(null);


  const hoverVariants = {
    initial: {
        backgroundPosition: '100% 0',
        scale: 1,
        y: 0
    },
    hover: {
        backgroundPosition: '0 0',
        scale: 1.05,
        y: "-5px"
    }
};

  const styles = `
        @keyframes tracking-in-contract-bck {
            0% {
                letter-spacing: 1em;
                transform: translateZ(-0.5em);
                opacity: 0;
            }
            100% {
                transform: translateZ(0);
                opacity: 1;
            }
        }

        .tracking-in-contract-bck {
            animation: tracking-in-contract-bck 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        }
    `;
  const handleMouseEnter = (linkName) => {
      setHoveredLink(linkName);
  }
   const [isBackgroundWhite, setIsBackgroundWhite] = useState(true);

  const handleMouseLeave = () => {
      setHoveredLink(null);
  }

  const getLinkStyle = (linkName) => ({
    color: hoveredLink === linkName ? 'white' : 'inherit',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginRight: '50px'  // ここで右マージンを追加
});

useEffect(() => {
  const handleScroll = () => {
      const scrollTop = window.scrollY;
      const introTextBottomPosition = introTextRef.current.getBoundingClientRect().bottom;
      const activityTextTopPosition = activityTextRef.current.getBoundingClientRect().top;
      const buffer = 400;  // 余白の設定
      
      // ページを少しでも下にスクロールした場合
      if (scrollTop > 0 && activityTextTopPosition > 0) {
          setIsBackgroundWhite(false);
      } 
      // '私たちは長野県白馬村で出会い、同じ目標があり結成されたグループです。' のテキストの底部が画面の上部よりもさらに上に50px来た場合
      else if (introTextBottomPosition <= -buffer) {
          setIsBackgroundWhite(true);
      } 
  };
      const styleTag = document.createElement('style');
      styleTag.innerHTML = styles;
      document.head.appendChild(styleTag);
      
      window.addEventListener("scroll", handleScroll);
      
      return () => {
          // コンポーネントがアンマウントされるときにstyleタグを削除
          document.head.removeChild(styleTag);
          // スクロールイベントのリスナーを削除
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  
  const MotionLink = ({ children, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);
    const animoGradientText = {
      display: 'inline-block',
      backgroundColor: '#000',
      backgroundImage: 'linear-gradient(to right, #ff69b4 0%, #ff4500 25%, #ffd700 50%, #7fff00 75%, #00ced1 100%)',
      backgroundPosition: '100% 0',
      backgroundSize: '200% 200%',
      color: 'transparent',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      cursor: 'pointer'
  };
  
  const animoGradientTextHovered = {
    ...animoGradientText,
    backgroundColor: 'white', // 背景を白に設定
    color: 'black',          // テキストの色を黒に設定
    backgroundPosition: '0 0',
};
return (
    <motion.a
        style={isHovered ? animoGradientTextHovered : animoGradientText}  // ホバー時のスタイルを適用
        initial="initial"
        whileHover="hover"
        variants={hoverVariants}
        onMouseEnter={() => { setIsHovered(true); handleMouseEnter(props.linkName); }}
        onMouseLeave={() => { setIsHovered(false); handleMouseLeave(); }}
        {...props}
    >
        {children}
    </motion.a>
);
};

  const activityTextStyle = {
    ...introTextStyle,
    fontSize: "5rem",
    marginTop: "5%",
    marginBottom: "30%",  // ここで間隔を調整
    textAlign: 'center'   // ここを追加
};
  
const activityTitleStyle = {
  fontSize: "8rem",
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.7)", 
  padding: "10px",  
  borderRadius: "10px", 
  marginBottom: "20%"  // ここを調整して間隔を変更
};

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  
  const MemberProfile = ({ imageSrc, name, description, reverseLayout }) => (
    <div style={reverseLayout ? memberContainerStyleSmallScreen : memberStyle}>
      {reverseLayout ? (
        <div>
          <div style={memberNameStyle}>{name}</div>
          <div style={memberDescriptionStyle}>{description}</div>
        </div>
      ) : null}
      <img
        src={imageSrc}
        alt={name}
        style={reverseLayout ? memberImageStyleSmallScreen : memberImageStyle}
      />
      {!reverseLayout ? (
        <div>
          <div style={memberNameStyle}>{name}</div>
          <div style={memberDescriptionStyle}>{description}</div>
        </div>
      ) : null}
    </div>
  );

  const memberStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: "20%",  // ここを修正
    marginBottom: "5%",  // こちらも修正
};

const memberContainerStyleSmallScreen = {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",  // ここを修正
    marginBottom: "5%",  // こちらも修正
};


  const memberImageStyle = {
    width: "600px",
    height: "500px",
    borderRadius: "30%",
    marginRight: "10%",
    marginLeft: "-35%",
    marginBottom: "10%",
  };

  const memberImageStyleSmallScreen = {
    width: "80%", // 画面幅の80%に調整
    height: "auto", // 高さは自動調整
    borderRadius: "30%",
    marginBottom: "10px", // 下マージン調整
  };

  const memberNameStyle = {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "30%",
  };

  const memberDescriptionStyle = {
    textAlign: "left",
    fontSize: "3rem",
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    textAlign: "center",
    fontFamily: "Zen Maru Gothic",
    paddingBottom: "50px",
    backgroundColor: isBackgroundWhite ? "white" : "black",
    color: isBackgroundWhite ? "black" : "white",
    transition: "background-color 2s", // こちらを追加
};


  const titleStyle = {
    fontSize: "8rem",
    marginBottom: "25%",
    textAlign: "center",
    marginTop: "25%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // 半透明の白い背景
    padding: "10px",  // 背景がテキストにぴったりつかないようにパディングを追加
    borderRadius: "10px",  // 角を少し丸くする
  };

  
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const dynamicTextStyle = {
    color: isBackgroundWhite ? 'black' : 'white'
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div style={containerStyle}>
      <h1 className="tracking-in-contract-bck" style={{ ...titleStyle, ...dynamicTextStyle }}>About Us</h1>
      <p style={{ ...introTextStyle, ...dynamicTextStyle }} ref={introTextRef}>
  burstはロゴデザインとweb・アプリ製作とGoods制作を行ってます。<br />
  デザインの加藤有、技術の山本エリック恵の2人で2023年の結成されました。<br />
  笑顔をイメージしたデザインやクスッと笑えるようなアイデア性で<br />
  見た人や関わる人の笑顔を作ることを理念に活動しています。
</p>
        <p style={{ ...activityTitleStyle, ...dynamicTextStyle }}>Our Areas of Expertise</p>
        <p style={{ ...activityTextStyle, opacity: activityOpacity, ...dynamicTextStyle }} ref={activityTextRef}>
    <MotionLink href="http://localhost:3000/Logo" style={getLinkStyle('Logo')} onMouseEnter={() => handleMouseEnter('Logo')} onMouseLeave={handleMouseLeave}>Logodesigns</MotionLink>
    <MotionLink href="https://github.com/EricKei2002" style={getLinkStyle('Programming')} onMouseEnter={() => handleMouseEnter('Programming')} onMouseLeave={handleMouseLeave}>Programming</MotionLink>
    <MotionLink href="http://localhost:3000/Goods" style={getLinkStyle('Goods')} onMouseEnter={() => handleMouseEnter('Goods')} onMouseLeave={handleMouseLeave}>Goods制作</MotionLink>
</p>
        <div>
          <MemberProfile
            imageSrc={member1Image}
            name="加藤有"
            description="Logo designer/Vlog作成/Goods制作"
            reverseLayout={isSmallScreen}
          />
          <MemberProfile
            imageSrc={member2Image}
            name="Eric Kei Fausett"
            description="Programmer/Streaming/Model"
            reverseLayout={isSmallScreen}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AboutUs;