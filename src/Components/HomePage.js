import _banner from "../img/banner.jpg";
import test_img from "../img/test.jpg";
import test_img2 from "../img/test2.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";

let header = document.querySelector("header");
let content = document.querySelector(".content");
let footer = document.querySelector("footer");

const HomePage = () => {  
  NavBar();

  const pageContent = 
  `<h1 class="display-4">TOP 3</h1>
  </div>
  <div class="row top-3">
  <div class="card-deck">
  <div class="card border-0 ">
    <img class="card-img-top rounded-0" src="${test_img}" alt="Card image cap">
  </div>
  <div class="card border-0">
    <img class="card-img-top rounded-0" src="${test_img2}" alt="Card image cap">
  </div>
  <div class="card border-0">
    <img class="card-img-top rounded-0" src="${test_img}" alt="Card image cap">
  </div>
  </div>
  </div>`;
  content.innerHTML = pageContent;

  Footer();
};

export default HomePage;