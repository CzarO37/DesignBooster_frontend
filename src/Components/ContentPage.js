import NavBar from "./NavBar.js";
import test_img from "../img/test.jpg";
import test_img2 from "../img/test2.jpg";

let top = document.querySelector(".top");
let content = document.querySelector(".content");
let footer = document.querySelector(".footer_text");

const ContentPage = () => {
    NavBar();

    let designs = `
    <div class="row content-designs">
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
    </div>
    <div class="row content-designs">
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
    </div>
    <div class="row content-designs">
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
    content.innerHTML = designs;
};

export default ContentPage;