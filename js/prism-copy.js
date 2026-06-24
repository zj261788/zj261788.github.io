document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll('pre[class*="language-"]');

  codeBlocks.forEach((block) => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.textContent = "Copy";

    button.addEventListener("click", () => {
      const code = block.querySelector("code").textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 2000);
      });
    });

    block.appendChild(button);
    block.style.position = "relative"; // 为了让按钮在右上角
  });
});
