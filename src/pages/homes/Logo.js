import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import logoImage1 from "/home/burst/BurstWebSite/src/assets/images/DSC08762.JPG";
import additionalImage from "/home/burst/BurstWebSite/src/assets/images/logo2.jpg";
import logoImage2 from "/home/burst/BurstWebSite/src/assets/images/2案提案.jpg";
import logoImage3 from "/home/burst/BurstWebSite/src/assets/images/DSC08540.JPG";
import logoImage4 from "/home/burst/BurstWebSite/src/assets/images/DSC08460.jpg";
import newImage from "/home/burst/BurstWebSite/src/assets/images/スクリーンショット (171).png";  // 画像の正確なパスに置き換えてください。
import secondNewImage from "/home/burst/BurstWebSite/src/assets/images/HP.jpg";  // 画像の正確なパスに置き換えてください。

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

    .motion-section {
      text-align: center;
      margin: 5% 0;
    }

    .description {
      font-size: 1.5em;
      margin-top: 2%;
      padding: 0 5%;
    }

    .logo-header {
      margin-bottom: 20%;
    }

    @media (max-width: 768px) {
      h1.focus-in-expand-fwd {
        font-size: 4vw;  // モバイル版でのタイトルのサイズを調整
        margin-bottom: 10%;
      }

      .description {
        font-size: 2vw;  // テキストのフォントサイズをvwで設定
        margin-top: 2%;
        padding: 0 5%;
        max-width: 90%;  // テキストの最大幅を設定（オプション）
      }
  
      @media (max-width: 768px) {
        .description {
          font-size: 4vw;  // モバイル版でのテキストのフォントサイズをvwで調整
        }
      }
    .center-text {
      text-align: center;
      font-size: 6vw;  // フォントサイズを増やす
      margin-top: 20%;
    }
  `}
</style>
      <header style={{ textAlign: "center", paddingTop: "20%" }}>
      <h1 className="focus-in-expand-fwd" style={{ fontSize: "12vw", marginBottom: "35%" }}>
          BURST Logo
        </h1>
      </header>
      <motion.div className="motion-section">
        <motion.img
          src={logoImage1}
          alt="ロゴ1"
          style={{ height: "50vw", width: "auto" }}  // 画像のサイズを増やす
        />
        <motion.img
          src={additionalImage}
          alt="追加の画像"
          style={{ height: "50vw", width: "auto" }}  // 画像のサイズを増やす
        />
        <p className="description">
          1ヒヤリングを行い、コンセプトシートを提出致します
          <br />
          （日数目安: 5日）
        </p>
      </motion.div>
      <motion.div className="motion-section">
        <motion.img
          src={logoImage2}
          alt="ロゴ2"
          style={{ height: "50vw", width: "60vw" }}  // 画像のサイズを増やす
        />
        <motion.img
          src={secondNewImage}
          alt="もう一つの新しい画像"
          style={{ height: "50vw", width: "60vw" }}  // 画像のサイズを増やす
        />
        <p className="description">
          2デザイン案を2パターン提出
          <br />
          （日数目安: 10日）
        </p>
      </motion.div>
      <motion.div className="motion-section">
        <motion.img
          src={logoImage3}
          alt="ロゴ3"
          style={{ height: "50vw", width: "60vw" }}  // 画像のサイズを増やす
        />
        <motion.img
          src={newImage}
          alt="新しい画像"
          style={{ height: "50vw", width: "60vw" }}  // 画像のサイズを増やす
        />
        <p className="description">
          3修正・納品
          <br />
          （日数目安: 5日）
        </p>
      </motion.div>
      <motion.div className="motion-section">
        <motion.img
          src={logoImage4}
          alt="ロゴ4"
          style={{ height: "50vw", width: "60vw" }}  // 画像のサイズを増やす
        />
        <p className="description">
          どうすればロゴを覚えてもらえるか、どうすれば長く使える耐久性のあるロゴになるか
          実際に確認してデザイン的な観点のプロとしてロゴが一番よく見えるように
          日にちをおいて何度も検証しており提出させて頂いた状態を自信をもっておすすめさせていただきますが
          好みもございますので修正を希望される場合は修正致しますのでご指示よろしくお願い致します。
          選んで頂いたもので特に大きな修正がなければ、細かい部分までしっかりと調整し2日後に納品させていただきます。
        </p>
        <p className="center-text"style={{ paddingTop: "5%", fontSize: "5vw", textAlign: "center", fontWeight: "bold" }}>by 加藤有</p>
      </motion.div>
    </>
  );
}
