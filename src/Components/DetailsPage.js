import test_img from "../img/test.jpg";
import test_img2 from "../img/test2.jpg";
import insta_icon from "../img/insta_icon.png";
import facebook_icon from "../img/facebook_icon.png";
import linkedin_icon from "../img/linkedin_icon.png";
import email_icon from "../img/email_icon.png";
import NavBar from "./NavBar.js";

let content = document.querySelector(".content");

const DetailsPage = ()=>{
  NavBar();
    const pageContent = 
    `<div class="row border">
            <div class="col">
            <div id="demo" class="carousel slide" data-ride="carousel">

            <!-- Indicators -->
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
          
            <!-- The slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item active border-0">
                <img class="img-fluid image_details" src="${test_img}" alt="Los Angeles">
              </div>
              <div class="carousel-item">
                <img class="img-fluid image_details " src="${test_img2}" alt="Chicago">
              </div>
              <div class="carousel-item">
                <img class="img-fluid image_details " src="${test_img}" alt="New York">
              </div>
            </div>
          
            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          
            </div>
            </div>
        </div>
        <div class ="row pt-5"></div>
        <div class="row">
            <div class="col border border-dark">
                <h3>Description:</h3>
                <div class="col-6">Feature</div>
                <div class="col-6">
                    <div class = "row">Image Included</div>
                    <div class = "row">Video Included</div>
                </div>
            </div>
            <div class="col border border-dark">
              <img class = "mr-3 mt-3 rounded-circle float-right" style="width:80px;" src="${test_img}" alt="author_image">
              <h3>First name and Last name of author</h3>
              <p>Contact me:</p>
              <div class = "row">
                <div class="m-2 pb-2 center"><img src="${facebook_icon}" alt = "facebook"><p style="float:right;">Facebook</p></div>
                <div class="m-2 pb-2"><img src="${linkedin_icon}" alt = "linked-in"><p style="float:right;">Linked-in</p></div>
              </div>
              <div class = "row">
                <div class="m-2 pb-2"><img src="${insta_icon}" alt = "instagram"><p style="float:right;">Instagram</p></div>
                <div class="m-2 pb-2"><img src="${email_icon}" alt = "email"><p style="float:right;">Email adress</p></div>
              </div>
            </div>
        </div>`;
    content.innerHTML = pageContent;
}

export default DetailsPage;