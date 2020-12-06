import "./stylesheets/style.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import _banner from "./img/banner.jpg";

const banner = `<img src="${_banner}" class="img-responsive banner_img"></img>`;
const top = document.querySelector(".top");
top.innerHTML += banner;

const content = document.querySelector(".content");
const pageContent = 
`<div class="card-deck">
<div class="card">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">Last updated 3 mins ago</small>
  </div>
</div>
<div class="card">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">Last updated 3 mins ago</small>
  </div>
</div>
<div class="card">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">Last updated 3 mins ago</small>
  </div>
</div>
</div>`;
content.innerHTML = pageContent;


const downArrow = 
`<div class="chevron"></div>
<div class="chevron"></div>
<div class="chevron"></div>`;

const arrow = document.querySelector(".arrow");
arrow.innerHTML = downArrow;
