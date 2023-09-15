import React, { useRef, useState, useEffect } from "react"; // useEffect をインポート
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  scrollSnapAlign: "center",
  perspective: "500wh",
  marginBottom: "2rem"  // この行を追加
};

const progressStyle = {
  position: "fixed",
  left: "0",
  right: "0",
  height: "5px",
  background: "var(--accent)",
  bottom: "100px",
};

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, divStyle, imgStyle, windowWidth }) { // windowWidth を追加
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const h2DynamicStyle = {
    fontSize: windowWidth <= 768 ? '4.5vw' : '2vw',  // スマホの場合、フォントサイズを小さくする
    margin: windowWidth <= 768 ? '1rem 0' : '2rem 0', // スマホの場合、マージンを調整する
  };


  // 各画像のURLを定義
  const imageUrls = {
    1: "https://suzuri.jp/BURST/12949231/heavyweight-t-shirt/l/white",
    2: "https://suzuri.jp/BURST/13351034/coach-jacket/m/black",
    3: "https://suzuri.jp/BURST/12804984/long-sleeve-t-shirt/s/white",
    4: "https://suzuri.jp/BURST/12788883/t-shirt/s/white"
  };

  const imageUrl = imageUrls[id];

  return (
    <section style={sectionStyle}>
      <a href={imageUrl}>
        <div ref={ref} style={divStyle}>
          <img src={`/${id}.jpg`} alt={`Image ${id}`} style={imgStyle} />
        </div>
      </a>
      <motion.h2 style={{ ...h2DynamicStyle, y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // ホバーの状態を管理するためのステート
  const [isHovered, setIsHovered] = useState(false); // この行を追加

  // 現在の画面の幅を監視するためのステート
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 画面の幅が変わった時に更新するためのエフェクト
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

// ボタンのスタイルを動的に変更
const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  fontSize: windowWidth <= 768 ? '6vw' : '2vw',  // 768px以下の場合、フォントサイズを6vwに変更
  textAlign: 'center',
  textDecoration: 'none',
  color: 'black',
  backgroundColor: isHovered ? '#333' : 'white',
  borderRadius: '5px',
  transition: 'background-color 0.2s',
};
const divStyle = windowWidth <= 768 ? { 
  width: "80vw",
  height: "60vh",
  position: "relative",
  margin: "20px",
  background: "var(--white)",
  overflow: "hidden",
} : {
  width: "500px",
  height: "600px",
  position: "relative",
  maxHeight: "90vh",
  margin: "20px",
  background: "var(--white)",
  overflow: "hidden",
};

const imgStyle = windowWidth <= 768 ? {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100%",
  height: "100%",
  cursor: "pointer",
} : {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100wh",
  height: "100wh",
  cursor: "pointer",
};

  return (
    <>
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
            white-space: normal;
            word-break: break-word;
          }

          @media (max-width: 600px) {
            h1, .resize-text {
              font-size: 2.5em;
            }
          }

          @media (min-width: 601px) and (max-width: 960px) {
            h1, .resize-text {
              font-size: 4em;
            }
          }

          @media (min-width: 961px) {
            h1 {
              font-size: 9em;
            }
            .resize-text {
              font-size: 5em;
            }
          }
        `}
      </style>
      <header style={{ textAlign: "center", paddingTop: "20%" }}>
      <h1 className="focus-in-expand-fwd wrap-text">BURST Goods</h1>
      <div style={{ paddingBottom: "20%" }}> </div>
      </header>
      {[1, 2, 3, 4].map((image) => (
        <Image id={image} key={image} divStyle={divStyle} imgStyle={imgStyle} windowWidth={windowWidth} />
      ))}
      <div style={{ textAlign: "center", marginTop: "2rem", marginBottom: "15rem" }}>
        <a 
          href="https://suzuri.jp/BURST" 
          style={buttonStyle} 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}  // ホバー開始時にステートを更新
          onMouseLeave={() => setIsHovered(false)} // ホバー終了時にステートを更新
        >
          etc.
        </a>
      </div>
      <motion.div className="progress" style={{ ...progressStyle, scaleX }} />
    </>
  );
}