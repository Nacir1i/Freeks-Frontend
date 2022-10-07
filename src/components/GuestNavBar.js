import { useState } from "react";
import { Link as NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";

const GuestNavBar = () => {
  let [hidden, setHidden] = useState(true);
  const handleHidden = () => {
    setHidden((prev) => !prev);
  };

  const links = [
    {
      text: "Home",
      path: "home",
      scroll: true,
    },
    {
      text: "About",
      path: "about",
      scroll: true,
    },
    {
      text: "Pricing",
      path: "packs",
      scroll: true,
    },
    {
      text: "Cantact",
      path: "contact",
      scroll: true,
    },
    {
      text: "Login",
      path: "user/login",
      scroll: false,
    },
    {
      text: "Signup",
      path: "user/signup",
      scroll: false,
    },
  ];

  const mainNav = links.map((link, i) => (
    <li key={i} className="w-24 flex justify-center">
      {link.scroll ? (
        <ScrollLink
          to={`${link.path}`}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="group text-white transition duration-500"
        >
          {link.text}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        </ScrollLink>
      ) : (
        <NavLink
          to={`/${link.path}`}
          className="group text-white transition duration-500"
        >
          {link.text}
          <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        </NavLink>
      )}
    </li>
  ));
  const hiddenNav = links.map((link, i) => (
    <li key={i} className="my-4 py-4 text-center">
      {link.scroll ? (
        <ScrollLink
          to={`${link.path}`}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="group text-white"
        >
          {link.text}
        </ScrollLink>
      ) : (
        <NavLink to={`/${link.path}`} className="group text-white">
          {link.text}
        </NavLink>
      )}
    </li>
  ));
  return (
    <div className="fixed z-50 w-screen md:h-24 h-[70px] bg-stone-900 text-white">
      <div className="w-full h-full flex items-center justify-between ">
        <Logo />
        <ul className="hidden md:flex items-center justify-between mr-12 text-lg">
          {mainNav}
        </ul>
        <div className="md:hidden">
          {hidden ? (
            <AiOutlineMenu className="mr-4 text-3xl" onClick={handleHidden} />
          ) : (
            <AiOutlineClose className="mr-4 text-3xl" onClick={handleHidden} />
          )}
        </div>
      </div>
      {!hidden ? (
        <div className="md:hidden w-screen h-screen bg-black/60">
          <ul className="md:hidden flex-col w-[60%] float-right bg-stone-900 text-white">
            {hiddenNav}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GuestNavBar;
