import Slide from "./Slide";
import img1 from "../public/slide1.png";
import img2 from "../public/slide2.png";
import img3 from "../public/slide3.png";
import img4 from "../public/slide4.png";
import img5 from "../public/slide5.png";

const dataArray = [img1, img2, img3, img4, img5];

export default () => {
  return <Slide data={dataArray} dotes={false} />;
};
