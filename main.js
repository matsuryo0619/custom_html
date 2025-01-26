//文字が変更されたらiframeを変更
const html = document.getElementById("html_code");
const css = document.getElementById("css_code");
const js = document.getElementById("js_code");
const result_iframe = document.getElementById("result");
html.addEventListener("input", resultchange);
css.addEventListener("input", resultchange);
js.addEventListener("input", resultchange);

//変更用コード
function resultchange() {
  const html_code = document.getElementById("html_code");
}
