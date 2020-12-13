import _banner from "../img/banner.jpg";
import test_img from "../img/test.jpg";
import test_img2 from "../img/test2.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { RedirectUrl } from "../Components/Router.js";
import { getUserSessionData } from "../utils/session.js";



let header = document.querySelector("header");
let content = document.querySelector(".content");
let footer = document.querySelector("footer");

const HomePage = () => {  
  NavBar();
  const user = getUserSessionData();

  fetch("http://localhost:3000/designs", {
    method: "GET",
    mode: "no-cors",
    headers: {
      //Authorization: user.token,
    },
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          "Error code : " + response.status + " : " + response.statusText
        );
      return response.json();
    })
    .then((data) => designList(data))
    .catch((err) => onError(err));
  
  Footer();
};

const designList = (data) => {
  if (!data) return;
  let pageContent = 
  `<h1 class="display-4">MOST POPULAR DESIGNS</h1>`;

  data.forEach((element) => {
    pageContent += `</div>
    <div class="row top-3">
    <div class="card-deck">
    <div class="card border-0 ">
      <img class="card-img-top rounded-0" src="${element.images}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5> 
      </div>
    </div>
    </div>
    </div>`
  });
  content.innerHTML = pageContent;
};

const onError = (err) => {
  console.error("HomePage::onError:", err);
  let errorMessage = "Error";
  if (err.message) {
    if (err.message.includes("401"))
      errorMessage =
        "Unauthorized access to this ressource : you must first login.";
    else errorMessage = err.message;
  }
  RedirectUrl("/error", errorMessage);
};

export default HomePage;