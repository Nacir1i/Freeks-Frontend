import logo from "../public/FreeksTrans.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    text: "Home",
    path: "/home",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Events",
    path: "/events",
  },
  {
    text: "Shop",
    path: "/packs",
  },
];

export default () => {
  const [hidden, setHidden] = useState(true);
  const handleHidden = () => {
    setHidden((prev) => !prev);
  };

  const linksHandler = links.map((link, i) => (
    <li key={i} className="w-24 flex justify-center">
      <Link
        href={link.path}
        className="group text-white transition duration-500 cursor-pointer"
      >
        {link.text}
        {!hidden ? (
          <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
        ) : (
          <></>
        )}
      </Link>
    </li>
  ));

  return (
    <header className="w-full h-20 fixed z-50 flex justify-center items-center bg-primary text-white text-xl font-medium">
      <div className="flex w-[90%] md:w-[60%] justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={60} />
          <ul className="hidden md:flex">{linksHandler}</ul>
        </div>
        <button className="hidden md:block w-[116px] h-[47px] bg-third rounded-md">
          Login
        </button>
        {hidden ? (
          <AiOutlineMenu className="block md:hidden text-3xl" />
        ) : (
          <>
            <AiOutlineClose className="block md:hidden text-3xl" />
          </>
        )}
      </div>
    </header>
  );
};
