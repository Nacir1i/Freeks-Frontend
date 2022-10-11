import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -70;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const GuestNavBar = () => {
  let [hidden, setHidden] = useState(true);
  const handleHidden = () => {
    setHidden((prev) => !prev);
  };

  const links = [
    {
      text: "Home",
      path: "Home#home",
    },
    {
      text: "About",
      path: "Home#about",
    },
    {
      text: "Pricing",
      path: "Home#packs",
    },
    {
      text: "Contact",
      path: "Home#contact",
    },
    {
      text: "Events",
      path: "events",
      event: () => {},
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

  const mainNav = links.map((link, i) => (
    <li key={i} className="w-24 flex justify-center">
      <HashLink
        smooth
        to={`${link.path}`}
        scroll={(el) => scrollWithOffset(el)}
        className="group text-white transition duration-500 cursor-pointer"
      >
        {link.text}
        <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
      </HashLink>
    </li>
  ));
  const hiddenNav = links.map((link, i) => (
    <li key={i} className="my-4 py-4 text-center" onClick={handleHidden}>
      <HashLink
        smooth
        to={`/${link.path}`}
        scroll={(el) => scrollWithOffset(el)}
        className="group text-white"
      >
        {link.text}
      </HashLink>
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
