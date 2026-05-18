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
                    <p>${name} の画面</p>
                </div>

                <div class="message-box">
                    <textarea class="message-input" placeholder="メッセージ"></textarea>
                    <button class="send-btn">送信</button>
                </div>
            </div>
        `;
    });
});