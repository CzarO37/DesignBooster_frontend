import _banner from "../img/banner.jpg";
import test_img from "../img/test.jpg";
import test_img2 from "../img/test2.jpg";

let top = document.querySelector(".top");
let content = document.querySelector(".content");
let footer = document.querySelector(".footer_text");

const HomePage = () => {  
  const banner = `<img src="${_banner}" class="img-responsive banner_img"></img>`;
  top.innerHTML = banner;

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

  const downArrow = 
  `<div class="col"></div>
  <div class="col d-flex justify-content-center arrow"><div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div></div>
  <div class="col"></div>`;
  footer.innerHTML = downArrow;
};

export default HomePage;