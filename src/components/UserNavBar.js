import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import Logo from "./Logo";

const UserNavBar = () => {
  const { logout } = useContext(UserContext);
  const links = [
    {
      text: "Home",
      path: "",
      event: () => {},
    },
    {
      text: "About",
      path: "about",
      event: () => {},
    },
    {
      text: "Event",
      path: "events",
      event: () => {},
    },

    {
      text: "Profile",
      path: "user/profile",
      event: () => {},
    },
    {
      text: "logout",
      path: "",
      event: () => logout(),
    },
  ];
  const linksComponents = links.map((link, i) => (
    <li key={i}>
      <Link to={`/${link.path}`} onClick={link.event}>
        {link.text}
      </Link>
    </li>
  ));
  return (
    <div id="nav-area" className="positionFixed">
      <Logo />
      <ul>{linksComponents}</ul>
    </div>
  );
};

export default UserNavBar;
