import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logoImage1 from "../../assets/images/DSC08460.jpg";
import logoImage2 from "/home/burst/BurstWebSite/src/assets/images/DSC08504.JPG";
import logoImage3 from "/home/burst/BurstWebSite/src/assets/images/DSC08540.JPG";
import logoImage4 from "/home/burst/BurstWebSite/src/assets/images/DSC08762.JPG";

const Logo = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll({ target: ref });

    // スクロールに基づいてy位置を変更
    const y = useTransform(scrollY, [0, 1000], [0, -200]);

    return (
        <motion.div ref={ref} style={{ y }}>
            {/* 1つ目の画像と説明文 */}
            <motion.div>
                <motion.img src={logoImage1} alt="ロゴ1" style={{ height: '400px', width: 'auto' }} />
                <p>1ヒヤリングとコンセプトシートを提出致します<br />（日数目安:5日）</p>
            </motion.div>

            {/* 2つ目の画像と説明文 */}
            <motion.div>
                <motion.img src={logoImage2} alt="ロゴ2" style={{ height: '400px', width: 'auto' }} />
                <p>2デザイン案を2パターン提出<br />（日数目安:10日）</p>
            </motion.div>

            {/* 3つ目の画像と説明文 */}
            <motion.div>
                <motion.img src={logoImage3} alt="ロゴ3" style={{ height: '400px', width: 'auto' }} />
                <p>3修正・納品<br />（日数目安:5日）</p>
            </motion.div>

            {/* 4つ目の画像と説明文 */}
            <motion.div>
                <motion.img src={logoImage4} alt="ロゴ4" style={{ height: '400px', width: 'auto' }} />
                <p>どうすればロゴを覚えてもらえるか、どうすれば長く使える耐久性のあるロゴになるか<br />
                実際に確認してデザイン的な観点のプロとしてロゴが一番よく見えるように<br />
                日にちをおいて何度も検証しており提出させて頂いた状態を自信をもっておすすめさせていただきますが<br />
                好みもございますので修正を希望される場合は修正致しますのでご指示よろしくお願い致します。<br />
                選んで頂いたもので特に大きな修正がなければ、細かい部分までしっかりと調整し2日後に納品させていただきます。</p>
            </motion.div>
        </motion.div>
    );
};

export default Logo;

