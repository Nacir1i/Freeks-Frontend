import Slide from "./Slide";
import img1 from "../public/slide1.png";
import img2 from "../public/slide2.png";
import img3 from "../public/slide3.png";
import img4 from "../public/slide4.png";
import img5 from "../public/slide5.png";
import Image from "next/dist/client/image";

const settings = {
  loop: false,
  align: "start",
  slidesToScroll: 1,
};

const slidesArray = [img1, img2, img3, img4, img5];
const slidesRenderer = slidesArray.map((slide, index) => (
  <div
    style={{ flex: "0 0 100%" }}
    className="h-full flex justify-center"
    key={index}
  >
    <Image src={slide} alt="img" />
  </div>
));

export default () => {
  return (
    <Slide props={settings} nav={false}>
      {slidesRenderer}
    </Slide>
  );
};
