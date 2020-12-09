let footer = document.querySelector(".footer");

const Footer = () => {
    let footer_text = `
        <!-- Grid row -->
        <div class="row">
          <div class="col-md-3 mt-md-0 mt-3"></div>
          <div class="col-md-6 mt-md-0 mt-3">
            <!-- Content -->
            <p class="text-center">You don't find the design you are dreaming of? Contact us now!</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2020 Copyright: DesignBooster
      </div>
      <!-- Copyright -->`;

      footer.innerHTML = footer_text;
};

export default Footer;