import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import Logo from "./Logo";
import { Bars3Icon } from "@heroicons/react/24/outline";

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
      text: "logout",
      path: "",
      event: () => logout(),
    },
  ];
  const linksComponents = links.map((link, i) => (
    <li key={i}>
      <Link
        to={`/${link.path}`}
        onClick={link.event}
        className="group text-white transition duration-500"
      >
        {link.text}
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
      </Link>
    </li>
  ));
  return (
    <div className="flex items-center justify-between h-24 bg-stone-900 text-white">
      <Logo />
      <ul className="hidden md:flex items-center justify-between w-80 mr-5 text-lg">
        {linksComponents}
      </ul>
      <div className="md:hidden">
        <Bars3Icon className="w-9 mr-4" />
      </div>
    </div>
  );
};

export default UserNavBar;
