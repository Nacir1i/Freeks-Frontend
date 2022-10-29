import { useState, useEffect, useCallback } from "react";
import UseEmblaCarousel from "embla-carousel-react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Image from "next/dist/client/image";

export default ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const [emblaRef, embla] = UseEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    console.log("prev");
    if (embla) embla.scrollPrev();
  }, [embla]);
  const scrollNext = useCallback(() => {
    console.log("next");
    if (embla) embla.scrollNext();
  }, [embla]);
  // const scrollTo = useCallback(
  //   (index) => embla && embla.scrollTo(index),
  //   [embla]
  // );

  // const onSelect = useCallback(() => {
  //   if (!embla) return;
  //   setSelectedIndex(embla.selectedScrollSnap());
  // }, [embla, setSelectedIndex]);
  const slidesRenderer = data.map((slide, index) => (
    <Image src={slide} alt="img" key={index} className="" />
  ));

  // useEffect(() => {
  //   if (!embla) return;
  //   onSelect();
  //   setScrollSnaps(embla.scrollSnapList());
  //   embla.on("select", onSelect);
  // }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="raltive w-full flex items-start justify-center">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex w-full">{slidesRenderer}</div>
      </div>
      <div
        className="z-10 absolute top-1/3 left-3 w-14 h-14 flex items-center justify-center cursor-pointer rounded-full bg-third"
        onClick={scrollPrev}
      >
        <MdOutlineArrowBackIosNew className="mr-[.3rem] text-white text-4xl" />
      </div>
      <div
        className="z-10 absolute top-1/3 right-3 w-14 h-14 flex items-center justify-center cursor-pointer rounded-full bg-third"
        onClick={scrollNext}
      >
        <MdOutlineArrowForwardIos className="ml-[.3rem] text-white text-4xl" />
      </div>
    </div>
  );
};
