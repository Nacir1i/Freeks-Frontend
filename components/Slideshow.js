import Slide from "./Slide";
import img1 from "../public/slide1.png";
import img2 from "../public/slide2.png";
import img3 from "../public/slide3.png";
import img4 from "../public/slide4.png";
import img5 from "../public/slide5.png";
import Image from "next/image";

const settings = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
};

const slidesArray = [img1, img2, img3, img4, img5];

export default function Slideshow() {
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
    <div className="relative w-full h-test">
      <Slide props={settings} nav={false}>
        {slidesRenderer}
      </Slide>
      <div className="z-20 absolute bottom-0 bg-[url('../public/waves4.svg')] aspect-ratio w-full bg-no-repeat bg-center bg-cover"></div>
    </div>
  );
}
