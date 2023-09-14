import React from "react";
import styled, { keyframes } from 'styled-components';

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
  padding: 25% 0;  // 上下のパディングを5%に設定し、左右のパディングを0に設定
  h1 {
    font-size: 2em;
    animation: ${focusInExpandFwd} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    margin-bottom: 10rem;  // ヘッダーの下部にマージンを追加
  }

  // レスポンス対応のメディアクエリ
  @media (min-width: 768px) {
    padding: 20%;
    h1 {
      font-size: 4em;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 10em;
    }
  }
`;

const StyledP = styled.p`
  padding: 1rem;
  font-size: 1em;
  text-align: center;
  margin: 3rem 0 1rem 0;  // 上のマージンを3remに、下のマージンを1remに設定

  @media (min-width: 768px) {
    font-size: 1.5em;
    margin: 3rem 0;  // デスクトップ表示時には上下のマージンを3remに設定
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 3rem;  // footerとの間にスペースを追加

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1em;  // デフォルトのフォントサイズ

    @media (min-width: 768px) {
      padding: 1rem 2rem;  // パディングを増やしてボタンを大きく
      font-size: 1.5em;   // フォントサイズを増やす
    }
  }

`;

const Contact = () => {

    // フォームの送信ハンドラー
    const handleSubmit = (event) => {
        event.preventDefault(); // デフォルトのフォーム送信を防ぐ
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScIgkbZvMvQ758bP01URk1glpNSwXI3BBr_G_CQbc0NgAr7Gw/viewform?embedded=true";
    };

    return (
        <div>
          <Header>
            <h1>Contact</h1>
          </Header>
            
            {/* 説明文 */}
            <StyledP>
                以下のフォームに入力してお問い合わせください
            </StyledP>
            
            {/* コンタクトフォーム */}
            <StyledForm className="contact-form" onSubmit={handleSubmit}>
                {/* ... 他のコード ... */}

                <button type="submit">BURSTへのお問い合わせ</button>
            </StyledForm>
        </div>
    );
};

export default Contact;

