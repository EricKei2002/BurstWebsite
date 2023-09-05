import React, { useState, useEffect, useRef } from "react";
import member1Image from "../../assets/images/HP写真.png";
import member2Image from "../../assets/images/kei.jpg";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

<style>
  {`
    @keyframes focus-in-expand-fwd {
      0% {
        letter-spacing: -0.5em;
        transform: translateZ(-1em);
        opacity: 0;
      }
      100% {
        transform: translateZ(0);
        opacity: 1;
      }
    }
  
    .focus-in-expand-fwd {
      animation: focus-in-expand-fwd 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .wrap-text {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    
    @media (max-width: 600px) {
      h1, p, .memberName, .memberDescription {
        font-size: 2em !important;
      }
    }
  `}
</style>

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
    color: hoveredLink === linkName ? 'inherit' : 'inherit',  // ここを修正
    textDecoration: 'underline',
    cursor: 'pointer',
    marginRight: '50px'
  });
  


const MotionLink = ({ children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 新たにホバー時のアニメーションを追加
  const hoverAnimationVariants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.2, // 拡大
      rotate: 360, // 360度回転
      transition: {
        duration: 0.5 // アニメーションの時間を指定
      }
    }
  };
  
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
  
  return (
    <motion.a
        style={animoGradientText}  // ホバー時のスタイルを変更しない
        initial="initial"
        whileHover="hover"
        variants={hoverAnimationVariants}  // ここに新しいvariantsを指定
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

const activityTextStyleSmallScreen = {
  ...activityTextStyle,
  flexDirection: 'column',  // 縦に並べる
  alignItems: 'center',     // 中央揃え
  gap: '1rem',              // 間隔を1remにする
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
    marginTop: "5%",  // ここを修正
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
    backgroundColor: "white",  // ここを固定値に
    color: "black",  // ここを固定値に
    // transition: "background-color 2s", // この行も削除
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
    color: 'black'  // ここを固定値に
};
  
  return (
    <ThemeProvider theme={theme}>
      <div style={containerStyle}>
        <h1 className="tracking-in-contract-bck wrap-text" style={{ ...titleStyle, ...dynamicTextStyle }}>About Us</h1>
        <p style={{ ...introTextStyle, ...dynamicTextStyle }} ref={introTextRef}>
          burstはロゴデザインとweb・アプリ製作とGoods制作を行ってます。<br />
          デザインの加藤有、技術の山本エリック恵の2人で2023年の結成されました。<br />
          笑顔をイメージしたデザインやクスッと笑えるようなアイデア性で<br />
          見た人や関わる人の笑顔を作ることを理念に活動しています。
        </p>
        <div style={isSmallScreen ? activityTextStyleSmallScreen : activityTextStyle}>
          <p>
            <MotionLink href="http://localhost:3000/Logo" style={getLinkStyle('Logo')} onMouseEnter={() => handleMouseEnter('Logo')} onMouseLeave={handleMouseLeave}>Logodesigns</MotionLink>
          </p>
          <p>
            <MotionLink href="https://github.com/EricKei2002" style={getLinkStyle('Programming')} onMouseEnter={() => handleMouseEnter('Programming')} onMouseLeave={handleMouseLeave}>Programming</MotionLink>
          </p>
          <p>
            <MotionLink href="http://localhost:3000/Goods" style={getLinkStyle('Goods')} onMouseEnter={() => handleMouseEnter('Goods')} onMouseLeave={handleMouseLeave}>Goods制作</MotionLink>
          </p>
        </div>
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
    </ThemeProvider>
  );
};

export default AboutUs;