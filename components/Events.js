import Slide from "./Slide";

const settings = {
  align: "start",
  slidesToScroll: 1,
};

export default function Events({ data }) {
  const dataRenderer = data.map((event) => (
    <div
      className="w-48 md:w-64 h-full mr-7 flex justify-center bg-white"
      key={event.id}
    >
      <div>
        <h1>{event.game}</h1>
      </div>
    </div>
  ));

  return (
    <div className="relative w-full h-test flex flex-col items-center justify-center md:bg-[url('../public/valorant.svg'),_url('../public/almbapiii.svg')] bg-[position:bottom_left,_bottom_right] bg-no-repeat">
      <h1 className="absolute top-28 text-black text-2xl font-bold">
        Upcoming events and tournaments
      </h1>
      <div className="w-[90%] h-96 md:w-[44rem] p-4 bg-third drop-shadow-2xl">
        <Slide props={settings} nav={false}>
          {dataRenderer}
        </Slide>
      </div>
      <div className="z-20 absolute bottom-0 bg-[url('../public/singleWave1.svg')] aspect-ratio w-full bg-no-repeat bg-center bg-cover"></div>
    </div>
  );
}
