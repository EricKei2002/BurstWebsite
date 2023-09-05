import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import logoImage1 from "/home/burst/BurstWebSite/src/assets/images/DSC08762.JPG";
import additionalImage from "/home/burst/BurstWebSite/src/assets/images/logo2.jpg";
import logoImage2 from "/home/burst/BurstWebSite/src/assets/images/2案提案.jpg";
import logoImage3 from "/home/burst/BurstWebSite/src/assets/images/DSC08540.JPG";
import logoImage4 from "/home/burst/BurstWebSite/src/assets/images/DSC08460.jpg";

export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
  
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
          `}
        </style>
        <header style={{ textAlign: "center", paddingTop: "20%" }}>
          <h1 className="focus-in-expand-fwd" style={{ fontSize: "9em" }}>
            BURST Goods
          </h1>
        </header>
        <motion.div style={{ marginTop: "25%" }}>
          <motion.img
            src={logoImage1}
            alt="ロゴ1"
            style={{ height: "400px", width: "auto" }}
          />
          <motion.img
            src={additionalImage}
            alt="追加の画像"
            style={{ height: "400px", width: "auto" }}
          />
          <p>
            1ヒヤリングを行い、コンセプトシートを提出致します
            <br />
            （日数目安: 5日）
          </p>
        </motion.div>
        <motion.div>
          <motion.img
            src={logoImage2}
            alt="ロゴ2"
            style={{ height: "400px", width: "auto" }}
          />
          <p>
            2デザイン案を2パターン提出
            <br />
            （日数目安: 10日）
          </p>
        </motion.div>
        <motion.div>
          <motion.img
            src={logoImage3}
            alt="ロゴ3"
            style={{ height: "400px", width: "auto" }}
          />
          <p>
            3修正・納品
            <br />
            （日数目安: 5日）
          </p>
        </motion.div>
        <motion.div>
          <motion.img
            src={logoImage4}
            alt="ロゴ4"
            style={{ height: "400px", width: "auto" }}
          />
          <p>
            どうすればロゴを覚えてもらえるか、どうすれば長く使える耐久性のあるロゴになるか
            <br />
            実際に確認してデザイン的な観点のプロとしてロゴが一番よく見えるように
            <br />
            日にちをおいて何度も検証しており提出させて頂いた状態を自信をもっておすすめさせていただきますが
            <br />
            好みもございますので修正を希望される場合は修正致しますのでご指示よろしくお願い致します。
            <br />
            選んで頂いたもので特に大きな修正がなければ、細かい部分までしっかりと調整し2日後に納品させていただきます。
          </p>
        </motion.div>
      </>
    );
  }