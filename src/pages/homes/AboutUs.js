import React from "react";
import member1Image from "../../assets/images/HP写真.png";
import member2Image from "../../assets/images/kei.jpg";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled, { keyframes } from 'styled-components';


const StyledLink = styled.a`
position: relative;
overflow: hidden;
text-decoration: none;
display: inline-block;
border: 1px solid #555;
padding: 10px 30px;
text-align: center;
outline: none;
transition: ease .2s;

& span {
    position: relative;
    z-index: 3;
    color: #333;
}

&:hover span {
    color: #fff;
}

&.bgleft::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: #333;
    width: 100%;
    height: 100%;
    transition: transform .6s cubic-bezier(0.8, 0, 0.2, 1) 0s;
    transform: scale(0, 1);
    transform-origin: right top;
}

&.bgleft:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
}

display: block;
margin: 2rem 0;
font-size: 2rem;
background-color: #000;
background-image: linear-gradient(to right, #ff69b4 0%, #ff4500 25%, #ffd700 50%, #7fff00 75%, #00ced1 100%);
background-position: 100% 0;
background-size: 200% 200%;
color: black;
-webkit-background-clip: text;
background-clip: text;
cursor: pointer;
padding: 5px 20px;
font-size: 4rem;

@media (min-width: 768px) {
  padding: 10px 30px;
  font-size: 3rem;
}
`;

// キーフレームアニメーションの定義
const focusInExpandFwd = keyframes`
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-1em);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

const Header = styled.header`
  text-align: center;
  padding: 20% 0;
  h1 {
    font-size: 5em;
    animation: ${focusInExpandFwd} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @media (min-width: 768px) {
    padding: 20%;
    h1 {
      font-size: 5em;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 10em;
    }
  }
`;


const CenteredText = styled.p`
  text-align: center;
  font-size: 4.5vw;  // テキストサイズを大きく
  margin: 2rem 0;  // 上下の間隔を追加
`;


const MemberContainer = styled.div.attrs(props => ({
  reverseLayout: props.reverseLayout
}))`
  display: flex;
  flex-direction: ${props => props.reverseLayout ? "column" : "row"};
  align-items: ${props => props.reverseLayout ? "center" : "flex-start"};
  justify-content: ${props => props.reverseLayout ? "center" : "flex-end"};
  margin-top: 5%;
  margin-bottom: 5%;
`;


const MemberImage = styled.img.attrs(props => ({
  smallScreen: props.smallScreen
}))`
  width: ${props => props.smallScreen ? "100%" : "600px"};
  height: ${props => props.smallScreen ? "auto" : "500px"};
  border-radius: 30%;
  margin-right: ${props => props.smallScreen ? "0" : "10%"};
  margin-left: ${props => props.smallScreen ? "0" : "-35%"};
  margin-bottom: 10px;
`;
const MemberName = styled.div`
  font-size: 1.8rem;  // スマホのフォントサイズを少し小さくする
  font-weight: bold;
  margin-bottom: 15%;  // スマホのマージンを少し減少させる

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 30%;
  }
`;

const MemberDescription = styled.div`
  text-align: left;
  font-size: 1.5rem;  // スマホのフォントサイズを少し小さくする
  word-wrap: break-word;  // テキストがコンテナの幅を超える場合に折り返す

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;



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

  const AboutUs = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header>
            <h1>About Us</h1>
          </Header>
          <CenteredText>
            burstはロゴデザインとweb・アプリ製作とGoods制作を行ってます。
          </CenteredText>
          <CenteredText>
            デザインの加藤有、技術の山本エリック恵の2人で2023年の結成されました。
          </CenteredText>
          <CenteredText>
            笑顔をイメージしたデザインやクスッと笑えるようなアイデア性で
          </CenteredText>
          <CenteredText>
            見た人や関わる人の笑顔を作ることを理念に活動しています。
          </CenteredText>
          <div>
    <p>
        <StyledLink className="bgleft" href="http://localhost:3000/Logo">
            <span>Logodesigns</span>
        </StyledLink>
    </p>
    <p>
        <StyledLink className="bgleft" href="https://github.com/EricKei2002">
            <span>Programming</span>
        </StyledLink>
    </p>
    <p>
        <StyledLink className="bgleft" href="http://localhost:3000/Goods">
            <span>Goods制作</span>
        </StyledLink>
    </p>
</div>
        <MemberContainer reverseLayout={isSmallScreen}>
                    <MemberImage src={member1Image} alt="加藤有" smallScreen={isSmallScreen} />
                    <div>
                        <MemberName>加藤有</MemberName>
                        <MemberDescription>Logo designer/Vlog作成/Goods制作</MemberDescription>
                    </div>
                </MemberContainer>
                <MemberContainer reverseLayout={isSmallScreen}>
                    <MemberImage src={member2Image} alt="Eric Kei Fausett" smallScreen={isSmallScreen} />
                    <div>
                        <MemberName>Eric Kei Fausett</MemberName>
                        <MemberDescription>Programmer/Streaming/Model</MemberDescription>
                    </div>
                </MemberContainer>
                </div>
    </ThemeProvider>
  );
};

export default AboutUs;