// ヘッダーを追加
const header_main = document.createElement("header");
header_main.id = "header";

// ヘッダーにタイトル文字を追加
const header_text = document.createElement("p");
header_text.id = "title_text";
header_text.textContent = "HTML実行環境";

// ヘッダーにダウンロードボタン（アイコン）を追加
const header_download = document.createElement("i");
header_download.id = "download_button";
header_download.title = "ファイルをダウンロード";
header_download.classList.add("fa-solid", "fa-download");

// ヘッダーにモード選択用のボタンを追加
const mode_button = document.createElement("label");
mode_button.className = "mode_switch";

const mode_check = document.createElement("input");
mode_check.type = "checkbox";

const mode_span = document.createElement("span");
mode_span.className = "slider";
mode_span.title = "実行結果を表示";

// iframeの表示・非表示を切り替え
mode_span.addEventListener("click", () => {
  const resultFrame = document.getElementById("result");
  
  // iframeの表示・非表示の切り替え
  if (resultFrame.style.display === "none") {
    resultFrame.style.display = "block";
    mode_span.setAttribute("title", "実行結果を非表示");
  } else {
    resultFrame.style.display = "none";
    mode_span.setAttribute("title", "実行結果を表示");
  }
});

// input, spanをlabelに追加
mode_button.appendChild(mode_check);
mode_button.appendChild(mode_span);

// ヘッダーに子要素を追加
header_main.appendChild(header_text);
header_main.appendChild(header_download);
header_main.appendChild(mode_button);

// ヘッダーのスタイルを読み込む
const style_link = document.createElement("link");
style_link.rel = "stylesheet";
style_link.href = "header.css";
document.head.appendChild(style_link);

// ヘッダーをページに追加（既存のHTMLの前に追加）
document.body.insertBefore(header_main, document.body.firstChild);

// ヘッダーの間隔を開けるためのp要素を追加
const header_margin = document.createElement("p");
header_margin.id = "header_margin";

// ヘッダーの間隔を開けるp要素をヘッダーの後に追加
document.body.insertBefore(header_margin, header_main.nextSibling);
