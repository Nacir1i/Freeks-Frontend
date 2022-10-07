import { useState } from "react";
import Map from "../imgs/map.png";

function Location() {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div
      id="contact"
      className="w-full h-[44rem] md:h-[45rem] bg-emerald-900 relative flex justify-center items-center"
    >
      <section className="absolute top-0 w-full h-14 md:h-24 bg-slate-900 clip polygon c-3 md:cp-3"></section>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="font-semibold my-4 text-2xl md:text-4xl text-center">
          How to get in touch with us :
        </h1>
        <div className="w-full mt-4 flex flex-wrap items-center justify-around">
          <div
            className="p-2 m-2 bg-red-700 border-2 cursor-pointer"
            onClick={handleHidden}
          >
            <img
              src={Map}
              alt="map"
              className="w-[25rem] md:w-[40rem] rounded-md"
            />
          </div>
          <div className="w-[70%] md:w-[30%]">
            <div className="my-4">
              <h1 className="text-2xl">Location : </h1>
              <p className="text-lg">
                Contoso Ltd 215 E Tasman Dr Po Box 65502
              </p>
            </div>
            <div className="my-4">
              <h1 className="text-2xl">Email Adress : </h1>
              <p className="text-lg">Lolrandomxd@gmail.com</p>
            </div>
            <div className="my-4">
              <h1 className="text-2xl">Phone Number : </h1>
              <p className="text-lg">05 XX YY WW ZZ</p>
            </div>
          </div>
        </div>
      </div>
      {hidden ? (
        <></>
      ) : (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/60"
          onClick={handleHidden}
        >
          <div className="p-2 mt-4 bg-red-700 border-2 cursor-pointer">
            <img src={Map} alt="map" className="w-[35rem] md:w-[65rem]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Location;
