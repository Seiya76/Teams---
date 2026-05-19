//CSS用のセレクタ(classで定義した名前を指定することで変数に情報が格納される)
const lists = document.querySelectorAll(".chat-list a, .channel-list a");

const contentMain = document.querySelector(".content-main");

lists.forEach(lists => {
    lists.addEventListener("click", () => {

        //指定の人物の名前を取得
        const name = lists.textContent;

        //名前選択時content-mainの画面書き換え
        contentMain.innerHTML = `
            <div class="main-view">
                <h2>${name}</h2>
                <div class="message-area">
                </div>

                <div class="message-box">
                    <textarea class="message-input" placeholder="メッセージ"></textarea>
                    <button class="send-btn" name="send-msg" >送信</button>
                </div>
            </div>
        `;

        //メッセージ送信機能部分の実装
        //メイン画面のメッセージエリア取得
        const messageArea = contentMain.querySelector(".message-area");

        //メッセージの中身を取得
        const messageInput = contentMain.querySelector(".message-input");

        //送信ボタンの情報を取得
        const sendBtn = contentMain.querySelector(".send-btn");

        //メッセージ送信関数
        function sendMessage(){
            const text = messageInput.value.trim();
            if(!text) return;

            //divタグを作成し入社メッセージをぶち込む処理
            const div = document.createElement("div");
            div.textContent = text;
            //divタグの下にテキストを追加
            messageArea.appendChild(div);

            //メッセージ送信後にテキストエリアを初期化
            messageInput.value = "";

        }

        //メッセージ送信部分をクリックしたらsendMessage発動
        sendBtn.addEventListener("click", sendMessage);
        //Enterキーにも対応していくよーんっ
        messageInput.addEventListener("keydown", (e) => {
            //本家はEnterキーだけで送信されるので対抗でEnter＋Shiftで送信に^-^
            if (e.key === "Enter" && e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

    });
});