import {
  BsFacebook,
  BsInstagram,
  BsTwitch,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center py-8 ">
      <h1 className="bg-third p-1 rounded-2xl px-5 text-white font-bold">
        FOLLOW US
      </h1>
      <div className="flex flex-wrap justify-center mt-8 space-x-6 text-3xl">
        <a href="#" className="text-gray-400 hover:text-white">
          <BsFacebook />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <BsInstagram />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <BsTwitch />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <BsWhatsapp />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <BsLinkedin />
        </a>
      </div>
      <div className="flex flex-wrap justify-center text-lg">
        <a href="#" className="text-gray-400 hover:text-white m-4">
          Home
        </a>
        <a href="#" className="text-gray-400 hover:text-white m-4">
          About
        </a>
        <a href="#" className="text-gray-400 hover:text-white m-4">
          Booking
        </a>
        <a href="#" className="text-gray-400 hover:text-white m-4">
          Location
        </a>
        <a href="#" className="text-gray-400 hover:text-white m-4">
          Event
        </a>
        <a href="#" className="text-gray-400 hover:text-white m-4">
          TOS
        </a>
        <a href="#" className="text-gray-400 hover:text-white m-4">
          Reviews
        </a>
      </div>
      <div className="flex justify-between text-lg">
        <a href="#" className="text-gray-400 hover:text-white m-4">
          Contact us
        </a>
      </div>
      <p className="text-left text-white">© 2022 FreeksCorp, Inc.</p>
    </div>
  );
}
