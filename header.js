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
mode_check.id="result_toggle";
mode_check.checked = "true";

const mode_span = document.createElement("span");
mode_span.className = "slider";
mode_span.id = "mode_span";
mode_span.title = "実行結果を非表示";
mode_span.addEventListener("click", result_update);

// input, spanをlabelに追加
mode_button.appendChild(mode_check);
mode_button.appendChild(mode_span);

// ヘッダーに子要素を移動
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

setInterval(() => {
  result_update();
}, 1000); //1秒ごとに更新
function result_update() {
  const checkbutton = document.getElementById("result_toggle");
  const span_title = document.getElementById("mode_span");
  const frame = document.getElementById("result");
  const content = document.getElementById("content");

  if (checkbutton.checked) {
    frame.style.display = "block";
    content.style.height = "calc(50% - 90px)";  // 画面の半分の高さを維持
    span_title.title = "実行結果を非表示";
  } else {
    frame.style.display = "none";
    content.style.height = "calc(100% - 90px)"; // iframeなしで全画面表示
    span_title.title = "実行結果を表示";
  }
}
