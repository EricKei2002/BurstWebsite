import React from "react";

export default function Programming() {
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
        <h1 className="focus-in-expand-fwd wrap-text">
          BURST Programming
        </h1>
        <div style={{ paddingBottom: "20%" }}> </div>
        <div className="wrap-text resize-text" style={{ textAlign: "center" }}>
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

