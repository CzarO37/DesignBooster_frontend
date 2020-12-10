import { setLayout } from "../utils/render.js";
let content = document.querySelector(".content");

const ErrorPage = (err) => {
  let errorPage;
  if (!err) errorPage = `<p>There was an error.</p>`;
  else if (!err.message) errorPage = `<p>${err}</p>`;
  else errorPage = `<p>${err.message}</p>`;
  let content = document.querySelector(".content");
  return (page.innerHTML = errorPage);
};

export default ErrorPage;
