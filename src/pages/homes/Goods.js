import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  scrollSnapAlign: "center",
  perspective: "500px",
  '@media (max-width: 600px)': {
    perspective: '400px',
  },
};

const divStyle = {
  width: "500px",
  height: "600px",
  position: "relative",
  maxHeight: "90vh",
  margin: "20px",
  background: "var(--white)",
  overflow: "hidden",
  '@media (max-width: 600px)': {
    width: '50%',
    height: 'auto',
    margin: '3px',
  },
};

const imgStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  '@media (max-width: 600px)': {
    width: '50%', // 例: スマホ画面で画像の幅を80%にする
    height: '50%', // 例: スマホ画面で画像の高さを80%にする
    top: '10%', // 画像を中央に配置するための調整
    left: '50%',
  },
};

const progressStyle = {
  position: "fixed",
  left: "0",
  right: "0",
  height: "5px",
  background: "var(--accent)",
  bottom: "100px",
  '@media (max-width: 600px)': {
    height: '3px',
    bottom: '45px',
  },
};


function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

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
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2, 3, 4].map((image) => (
        <Image id={image} key={image} />
      ))}
      <motion.div className="progress" style={{ ...progressStyle, scaleX }} />
    </>
  );
}
