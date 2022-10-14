import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full h-20 p-4 bg-stone-900 grid grid-flow-col grid-cols-7">
      <div className="hidden justify-self-start md:flex flex-col justify-center col-span-1">
        <h1 className="text-2xl">Freeks corporation Ⓒ.</h1>
      </div>
      <ul className="flex justify-center items-center col-span-7 md:col-span-6">
        <li className="mx-4 flex justify-center text-3xl">
          <a href="https://tailwindcss.com/" alt="/">
            <FaFacebook />
          </a>
        </li>
        <li className="mx-4 flex justify-center text-3xl">
          <a href="https://tailwindcss.com/" alt="/">
            <FaTwitter />
          </a>
        </li>
        <li className="mx-4 flex justify-center text-3xl">
          <a href="https://tailwindcss.com/" alt="/">
            <FaInstagram />
          </a>
        </li>
        <li className="mx-4 w-12 flex justify-center text-3xl">
          <a href="https://tailwindcss.com/" alt="/">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
