//ヘッダーを追加
const header_main = document.createElement("header");
header_main.id = "header";

//ヘッダーにタイトル文字を追加
const header_text = document.createElement("p");
header_text.textContent = "HTML実行環境";

//ヘッダーにダウンロードボタンを追加
const header_download = document.createElement("i");

//ヘッダーに子要素を移動
header_main.appendChild(header_text);
header_main.appendChild(header_download);

//ヘッダーのスタイルを読み込む
const style_link = document.createElement("link");
style_link.rel = "stylesheet"
style_link.href = "header.css"
document.head.appendChild(style_link)
