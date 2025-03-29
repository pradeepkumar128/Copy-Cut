const copyBtn = document.getElementById("copy-btn");
let text = document.getElementById("content-area").innerHTML;

copyBtn.addEventListener("click", () => {
  setTimeout(() => {
    copyBtn.textContent = "copy";
  }, 5000);
  navigator.clipboard.writeText(text);
  copyBtn.textContent = "Copied!";

});
