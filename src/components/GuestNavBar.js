import { Link } from "react-router-dom";
import Logo from "./Logo";

const links = [
  {
    text: "Home",
    path: "",
  },
  {
    text: "About",
    path: "about",
  },
  {
    text: "Event",
    path: "events",
  },
  {
    text: "Login",
    path: "user/login",
  },
  {
    text: "Signup",
    path: "user/signup",
  },
];

const linksComponents = links.map((link, i) => (
  <li key={i}>
    <Link to={`/${link.path}`}>{link.text}</Link>
  </li>
));

const GuestNavBar = () => {
  return (
    <div id="nav-area" className="positionFixed">
      <Logo />
      <ul>{linksComponents}</ul>
    </div>
  );
};

export default GuestNavBar;
