import React, { useState, useEffect, useRef } from "react";
import member1Image from "../../assets/images/893.jpg";
import member2Image from "../../assets/images/kei.jpg";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const AboutUs = () => {
  const introTextRef = useRef(null);  // テキスト要素の参照を取得
  const activityTextRef = useRef(null);
  const [introOpacity] = useState(1);
  const [activityOpacity] = useState(1);
  const introTextStyle = {
    fontSize: "5rem",
    opacity: introOpacity,
    transition: "opacity 1s, all 5s"
  };
  const [hoveredLink, setHoveredLink] = useState(null);


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
      cursor: 'pointer'
    });


    useEffect(() => {
      const handleScroll = () => {
          const scrollTop = window.scrollY;
          const activityTextPosition = activityTextRef.current.getBoundingClientRect().top;
          
          // ページを少しでも下にスクロールした場合
          if (scrollTop > 0 && activityTextPosition > 0) {
              setIsBackgroundWhite(false);
          } 
          // '私たちの活動内容' のテキストが画面上部に来た場合
          else if (activityTextPosition <= 0) {
              setIsBackgroundWhite(true);
          } else {
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
  


    const activityTextStyle = {
      ...introTextStyle,
      fontSize: "3rem",
      marginTop: "5%",
      marginBottom: "30%",  // ここで間隔を調整
  };
  
  const activityTitleStyle = {
    fontSize: "8rem",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // 半透明の白い背景
    padding: "10px",  // 背景がテキストにぴったりつかないようにパディングを追加
    borderRadius: "10px",  // 角を少し丸くする// ここで希望のフォントサイズに変更
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
          私たちは長野県白馬村で出会い、
          <br />
          同じ目標があり結成されたグループです。
        </p>
        <p style={{ ...activityTitleStyle, ...dynamicTextStyle }}>私たちの活動内容</p>
        <p style={{ ...activityTextStyle, opacity: activityOpacity, ...dynamicTextStyle }} ref={activityTextRef}>
            <a href="http://localhost:3000/Logo" style={getLinkStyle('Logo')} onMouseEnter={() => handleMouseEnter('Logo')} onMouseLeave={handleMouseLeave}>Logodesigns</a>、
            <a href="https://github.com/EricKei2002" style={getLinkStyle('Programming')} onMouseEnter={() => handleMouseEnter('Programming')} onMouseLeave={handleMouseLeave}>Programming</a>、
            <a href="http://localhost:3000/Goods" style={getLinkStyle('Goods')} onMouseEnter={() => handleMouseEnter('Goods')} onMouseLeave={handleMouseLeave}>Goods制作</a>、
            <a href="http://localhost:3000/Vlog" style={getLinkStyle('Vlog')} onMouseEnter={() => handleMouseEnter('Vlog')} onMouseLeave={handleMouseLeave}>Vlog作成</a>、
            <a href="https://www.twitch.tv/chicken0216" style={getLinkStyle('Streaming')} onMouseEnter={() => handleMouseEnter('Streaming')} onMouseLeave={handleMouseLeave}>Streaming</a>
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