import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaCircle } from "react-icons/fa";

export default ({ data, dotes }) => {
  const [index, setIndex] = useState(0);

  const indexForword = () => {
    setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };
  const indexBackword = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  };

  const dataHanlder = data.map((img, index) => (
    <Image src={img} alt="img" key={index} className="pointer-events-none" />
  ));

  const navHandler = data.map((current, index) => (
    <li
      className="mx-4 text-sm text-third"
      onClick={() => setIndex(index)}
      key={index}
    >
      <FaCircle className="cursor-pointer" />
    </li>
  ));
  const swipeHandler = useSwipeable({
    onSwipedLeft: indexBackword,
    onSwipedRight: indexForword,
    trackMouse: true,
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-sky-200">
      <div
        className="z-10 absolute left-3 w-14 h-14 flex items-center justify-center cursor-pointer rounded-full bg-third"
        onClick={indexBackword}
      >
        <MdOutlineArrowBackIosNew className="mr-[.3rem] text-white text-4xl" />
      </div>
      <div
        {...swipeHandler}
        className="overflow-hidden relative w-full h-full flex items-center justify-center"
      >
        {dataHanlder}
        {dotes ? (
          <ul className="absolute bottom-3 flex">{navHandler}</ul>
        ) : (
          <></>
        )}
      </div>
      <div
        className="z-10 absolute right-3 w-14 h-14 flex items-center justify-center cursor-pointer rounded-full bg-third"
        onClick={indexForword}
      >
        <MdOutlineArrowForwardIos className="ml-[.3rem] text-white text-4xl" />
      </div>
    </div>
  );
};
