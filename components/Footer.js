import { BsFacebook, BsInstagram, BsTwitch, BsWhatsapp, BsLinkedin } from "react-icons/bs";
export default () => {
  return (
    <>
      <footer className="bg-primary">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-white"
              >
                Home
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-white"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-white"
              >
                Booking
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-white"
              >
                Location
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-white"
              >
                Event
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-white"
              >
                Reviews
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-white"
              >
                TOS
              </a>
            </div>
          </nav>
          <div className="px-5 text-center">
            <a
              href="#"
              className="text-base leading-6 text-gray-500 hover:text-white"
            >
              Contact us
            </a>
          </div>
          <div className="flex justify-center mt-8 space-x-6 text-2xl">
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
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2022 FreekCorp, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
