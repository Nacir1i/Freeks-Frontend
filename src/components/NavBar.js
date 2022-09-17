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
];

const linksComponents = links.map((link, index) => (
  <li key={index}>
    <Link to={`/${link.path}`}>{link.text}</Link>
  </li>
));

const Navbar = () => {
  return (
    <div className="wrapper">
      <div id="nav-area">
        <Logo />
        <ul>{linksComponents}</ul>
      </div>
    </div>
  );
};

export default Navbar;
