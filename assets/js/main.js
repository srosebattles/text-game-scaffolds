// Copy-to-clipboard buttons for prompt text blocks.
// Each .copy-btn copies the text of the <pre> inside its parent .prompt-body.
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const pre = btn.closest(".prompt-body")?.querySelector("pre");
    if (!pre) return;
    try {
      await navigator.clipboard.writeText(pre.textContent);
      btn.textContent = "Copied!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "Copy";
        btn.classList.remove("copied");
      }, 2000);
    } catch {
      btn.textContent = "Press Ctrl+C";
    }
  });
});
