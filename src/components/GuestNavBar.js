import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
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
    <Link
      to={`/${link.path}`}
      className="group text-white transition duration-500"
    >
      {link.text}
      <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </Link>
  </li>
));

const GuestNavBar = () => {
  return (
    <div className="w-screen md:h-24 h-[70px] bg-stone-900 text-white">
      <div className="w-full h-full flex items-center justify-between ">
        <Logo />
        <ul className="hidden md:flex items-center justify-between w-96 mr-5 text-lg">
          {linksComponents}
        </ul>
        <div className="md:hidden">
          <Bars3Icon className="w-9 mr-4" />
        </div>
      </div>
      <ul className="md:hidden flex-col bg-stone-900 text-white">
        {linksComponents}
      </ul>
    </div>
  );
};

export default GuestNavBar;
