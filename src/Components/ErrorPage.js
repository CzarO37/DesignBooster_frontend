import Footer from "./Footer.js";
import NavBar from "./NavBar.js";

const ErrorPage = (err) => {
  NavBar();
  let errorPage;
  if (!err) errorPage = `<p>There was an error.</p>`;
  else if (!err.message) errorPage = `<p>${err}</p>`;
  else errorPage = `<p>${err.message}</p>`;
  let content = document.querySelector(".content");
  Footer();
  return (content.innerHTML = errorPage);
};

export default ErrorPage;
