import React from "react";

const Contact = () => {
    return(
        <div className="contact-container">
            {/* タイトル */}
            <h2>お問い合わせ</h2>
            
            {/* 説明文 */}
            <p>
                以下のフォームに入力してお問い合わせください。できるだけ早く対応いたします。
            </p>
            
            {/* コンタクトフォーム */}
            <form className="contact-form">
                <div className="input-group">
                    <label>名前</label>
                    <input type="text" placeholder="お名前を入力してください" required />
                </div>

                <div className="input-group">
                    <label>メールアドレス</label>
                    <input type="email" placeholder="メールアドレスを入力してください" required />
                </div>

                <div className="input-group">
                    <label>件名</label>
                    <input type="text" placeholder="件名を入力してください" required />
                </div>

                <div className="input-group">
                    <label>メッセージ</label>
                    <textarea placeholder="メッセージを入力してください" required></textarea>
                </div>

                <button type="submit">送信</button>
            </form>
        </div>
    );
};

export default Contact;
