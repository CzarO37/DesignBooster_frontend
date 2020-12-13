import _banner from "../img/banner.jpg";
import { getUserSessionData } from "../utils/session.js";

let header = document.querySelector("header");

const NavBar = () => {
    const banner = `<img src="${_banner}" class="img-responsive banner_img"></img>`;
    let nav;
    let user = getUserSessionData();
    if (user) {
      nav = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/" data-uri="/">Top 3</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" data-uri="/content">The designs<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-uri="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-uri="/contact">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link disabled" href="#">${user.username}</a>  
        </li>
      </ul>
      </nav> `;
    } else {
      nav = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/" data-uri="/">Top 3</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" data-uri="/content">The designs<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-uri="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-uri="/contact">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link" href="#" data-uri="/login">Login</a> 
        </li>
      </ul>
      </nav> `;
    }
  return (header.innerHTML = banner+nav);
};

export default NavBar;