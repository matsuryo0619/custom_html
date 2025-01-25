// ヘッダーを追加
const header_main = document.createElement("header");
header_main.id = "header";

// ヘッダーにタイトル文字を追加
const header_text = document.createElement("p");
header_text.textContent = "HTML実行環境";

// ヘッダーにダウンロードボタン（アイコン）を追加
const header_download = document.createElement("i");
header_download.classList.add("fa-solid", "fa-download"); // Font Awesome のアイコンを追加

// ヘッダーに子要素を移動
header_main.appendChild(header_text);
header_main.appendChild(header_download);

// ヘッダーのスタイルを読み込む
const style_link = document.createElement("link");
style_link.rel = "stylesheet";
style_link.href = "header.css"; // header.css のパスを確認
document.head.appendChild(style_link);

// ヘッダーをページに追加
document.body.appendChild(header_main);
