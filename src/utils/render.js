function setLayout(top, content, footer_text) {
    if (top)
      document.querySelector(".top").innerText = top;
    if (content) {
      document.querySelector(".content").innerText = content;
    }
    if (footer_text) document.querySelector(".footer_text").innerText = footer_text;
  }

export {
  setLayout,
};