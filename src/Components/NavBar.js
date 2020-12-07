let header = document.querySelector("header");

const NavBar = () => {
    let nav = `
    <div id="navBar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/" data-uri="/">DesignBooster</a>
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
      </ul>
      </nav>
      </div> `;
  header.innerHTML = nav;
};

export default NavBar;