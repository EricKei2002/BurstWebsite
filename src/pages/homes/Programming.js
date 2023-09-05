import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Programming() {
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

          @media (max-width: 600px) {
            h1, .resize-text {
              font-size: 5em;
            }
          }

          .wrap-text {
            white-space: normal;
            word-break: break-word;
          }
        `}
      </style>
      <header style={{ textAlign: "center", paddingTop: "20%" }}>
        <h1 className="focus-in-expand-fwd wrap-text" style={{ fontSize: "9em" }}>
          BURST Programming
        </h1>
        <div style={{ paddingBottom: "20%" }}> </div>
        <div className="wrap-text resize-text" style={{ fontSize: "5em", textAlign: "center" }}>
          このページは作成途中 お待ちください
        </div>
        <div className="wrap-text resize-text" style={{ paddingTop: "5%", fontSize: "3em", textAlign: "center", fontWeight: "bold" }}>
          by Eric Kei
        </div>
        <div style={{ paddingBottom: "20%" }}> </div>
      </header>
    </>
  );
}
