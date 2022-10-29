import logo from "../public/FreeksTrans.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    text: "Home",
    path: "/",
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
        <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
      </Link>
    </li>
  ));

  const hiddenLinkHandler = links.map((link, i) => (
    <li key={i} className="my-4 py-4 text-center" onClick={handleHidden}>
      <Link
        href={link.path}
        className="group text-white transition duration-500 cursor-pointer"
      >
        {link.text}
      </Link>
    </li>
  ));

  return (
    <>
      <header className="w-full h-20 fixed z-40 flex justify-center items-center bg-primary text-white text-xl font-medium">
        <div className="flex w-[90%] md:w-[60%] justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" width={60} />
            </Link>
            <ul className="hidden md:flex">{linksHandler}</ul>
          </div>
          <button className="hidden md:block w-[116px] h-[47px] bg-third rounded-md">
            Login
          </button>
          {hidden ? (
            <AiOutlineMenu
              className="block md:hidden text-3xl"
              onClick={handleHidden}
            />
          ) : (
            <AiOutlineClose
              className="block md:hidden text-3xl"
              onClick={handleHidden}
            />
          )}
        </div>
      </header>
      {!hidden ? (
        <div className="md:hidden w-screen h-screen flex justify-end bg-black/60">
          <div className="md:hidden w-[60%] h-full flex flex-col items-center bg-primary">
            <ul className="mt-20 w-full flex-col float-right text-white">
              {hiddenLinkHandler}
            </ul>
            <button className="w-[116px] h-[47px] bg-third rounded-md text-white">
              Login
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
