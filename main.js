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
style_link.href = "header.css";
document.head.appendChild(style_link);

// ヘッダーをページに追加
document.body.appendChild(header_main);

//ヘッダーの間隔を開けるようのp要素を追加
const header_margin = document.createElement("p");
header_margin.id = "header_margin";

document.body.appendChild(header_margin);
window.addEventListener("load", function() {
  const header = document.getElementById("header");
  const headerMargin = document.getElementById("header_margin");

  // #header の高さを取得し、#header_margin に設定
  const headerHeight = header.offsetHeight;
  headerMargin.style.height = `${headerHeight}px`;
});
