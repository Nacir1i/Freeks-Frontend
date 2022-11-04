import Image from "next/image";
import map from "../public/map.jpg";
import Slide from "./Slide";
import img1 from "../public/slide1.png";
import img2 from "../public/slide2.png";
import img3 from "../public/slide3.png";
import img4 from "../public/slide4.png";
import img5 from "../public/slide5.png";

const slidesArray = [img1, img2, img3, img4, img5];

export default function Location() {
  const slidesRenderer = slidesArray.map((slide, index) => (
    <div
      style={{ flex: "0 0 100%" }}
      className="flex justify-center"
      key={index}
    >
      <Image src={slide} alt="img" />
    </div>
  ));

  return (
    <div className="w-[90%] md:w-[60%] h-test bg-red-500 flex flex-col justify-center items-center">
      <h1>Location</h1>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h3>
      <div className="w-full bg-slate-500 flex flex-wrap justify-around items-center">
        <Image src={map} className="w-[45%] h-96" />
        <div className="w-[45%] h-96 bg-violet-800">
          <Slide>{slidesRenderer}</Slide>
        </div>
      </div>
    </div>
  );
}
