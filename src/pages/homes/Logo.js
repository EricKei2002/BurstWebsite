import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logoImage from "../../assets/images/DSC08460.jpg"; // 画像をインポート

const Logo = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll({ target: ref });

    // スクロールに基づいてy位置を変更
    const y = useTransform(scrollY, [0, 1000], [0, -200]); // これは例です。値は調整が必要です。

    return (
        <motion.div ref={ref} style={{ y }}>
            <h2>作成したロゴを載せる</h2>
            <motion.img src={logoImage} alt="ロゴ" style={{ height: '400px', width: 'auto' }} />
            {/* ここにロゴの画像やその他の要素を追加できます */}
        </motion.div>
    );
};

export default Logo;
