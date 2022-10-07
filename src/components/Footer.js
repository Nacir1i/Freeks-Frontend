import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-24 md:h-32 p-4 bg-stone-900 flex items-center justify-center md:between">
      <div className="hidden md:block">
        <h1 className="text-2xl">Freeks Corperation Ⓒ.</h1>
        <p className="text-sm">Develepment Evnirment</p>
        <p className="text-sm">Ayoub Idouadi - Taoufiq Naciri</p>
      </div>
      <div className="w-[70%] flex items-center justify-center">
        <ul className="w-[40%] flex">
          <li className="w-1/4 flex justify-center text-3xl">
            <a href="https://tailwindcss.com/" alt="/">
              <FaFacebook />
            </a>
          </li>
          <li className="w-1/4 flex justify-center text-3xl">
            <a href="https://tailwindcss.com/" alt="/">
              <FaTwitter />
            </a>
          </li>
          <li className="w-1/4 flex justify-center text-3xl">
            <a href="https://tailwindcss.com/" alt="/">
              <FaInstagram />
            </a>
          </li>
          <li className="w-1/4 flex justify-center text-3xl">
            <a href="https://tailwindcss.com/" alt="/">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
