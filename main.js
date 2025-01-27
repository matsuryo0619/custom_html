//文字が変更されたらiframeを変更
const html = document.getElementById("html_code");
const css = document.getElementById("css_code");
const js = document.getElementById("js_code");
html.addEventListener("input", resultchange);
css.addEventListener("input", resultchange);
js.addEventListener("input", resultchange);

//変更用コード
function resultchange() {
  const html_code = document.getElementById("html_code");
  const css_code = document.getElementById("css_code");
  const js_code = document.getElementById("js_code");
  const result_iframe = document.getElementById("result");
  result_frame.srcdog = 
   `<!DOCTYPE html>
    <html>
      <head>
        <title>実行結果</title>
        <meta charset="UTF-8">
        <style>
          ${css_code}
        </style>
      </head>
      <body>
        ${html_code}
        <script>
          ${js_code}
        </script>
      </body>
    </html>`
}
