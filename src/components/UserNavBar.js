import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import Logo from "./Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const UserNavBar = () => {
  const { logout } = useContext(UserContext);
  let [hidden, setHidden] = useState(true);
  const handleHidden = () => {
    setHidden((prev) => !prev);
  };

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
  const mainNav = links.map((link, i) => (
    <li key={i}>
      <Link
        to={`/${link.path}`}
        onClick={link.event}
        className="group text-white transition duration-500"
      >
        {link.text}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
      </Link>
    </li>
  ));
  const hiddenNav = links.map((link, i) => (
    <li key={i} className="w-full py-4 text-center border-b-2 border-zinc-200">
      <Link
        to={`/${link.path}`}
        onClick={link.event}
        className="group text-white transition duration-500"
      >
        {link.text}
        <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
      </Link>
    </li>
  ));
  return (
    <div className="fixed w-screen md:h-24 h-[70px] bg-stone-900 text-white">
      <div className="w-full h-full flex items-center justify-between ">
        <Logo />
        <ul className="hidden md:flex items-center justify-between w-96 mr-12 text-lg">
          {mainNav}
        </ul>
        <div className="md:hidden">
          {hidden ? (
            <Bars3Icon className="w-9 mr-4" onClick={handleHidden} />
          ) : (
            <XMarkIcon className="w-9 mr-4" onClick={handleHidden} />
          )}
        </div>
      </div>
      {!hidden ? (
        <ul className="md:hidden flex-col w-full px-3 bg-stone-900 text-white">
          {hiddenNav}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserNavBar;
