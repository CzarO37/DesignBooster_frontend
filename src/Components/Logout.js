import RegisterPage from "./LoginPage.js";
import { RedirectUrl } from "./Router.js";
import NavBar from "./NavBar.js";
import {removeSessionData} from "../utils/session.js";

const Logout = () => {
  removeSessionData();
  // re-render the navbar for a non-authenticated user
  NavBar();
  RedirectUrl("/login"); 
};


export default Logout;
