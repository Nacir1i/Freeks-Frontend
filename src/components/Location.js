import Map from "./Map";

function Location() {
  return (
    <div id="contact" className="relative w-full bg-emerald-900">
      <section className="absolute top-0 w-full h-14 md:h-24 bg-slate-900 clip polygon c-3 md:cp-3"></section>
      <div className="w-full p-4 h-full grid justify-items-center grid-rows-6">
        <div className="flex md:mt-24 items-center justify-center row-span-1 ">
          <h1 className="font-semibold text-2xl md:text-4xl text-center">
            How to get in touch with us :
          </h1>
        </div>
        <div className="w-full flex flex-wrap items-center justify-around row-span-5">
          <div className="p-1 w-[95%] md:w-[50%] bg-red-700 border-2">
            {/* <Map /> */}
          </div>
          <div className="w-[70%] md:w-[30%]">
            <div className="my-4">
              <h1 className="text-2xl">Location : </h1>
              <p className="text-lg">Imm Yousra, Hay Hassani, Inzgane, 80000</p>
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
    </div>
  );
}

export default Location;
