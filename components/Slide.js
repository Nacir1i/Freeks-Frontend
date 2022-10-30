import { useState, useEffect, useCallback } from "react";
import Image from "next/dist/client/image";
import UseEmblaCarousel, { Dot } from "embla-carousel-react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default ({ children, props, nav = false }) => {
  const [emblaRef, emblaApi] = UseEmblaCarousel({ ...props });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div
      className="relative w-full h-test overflow-hidden flex items-center justify-center bg-red-300"
      ref={emblaRef}
    >
      <div className="flex">{children}</div>
      <div
        className="hove:ease-in-out duration-200 z-10 absolute top-0 left-0 w-14 h-full flex items-center justify-center cursor-pointer hover:bg-third/60"
        onClick={scrollPrev}
      >
        <MdOutlineArrowBackIosNew className="mr-[.3rem] text-third text-4xl" />
      </div>
      <div
        className="hove:ease-in-out duration-200 z-10 absolute top-0 right-0 w-14 h-full flex items-center justify-center cursor-pointer hover:bg-third/60"
        onClick={scrollNext}
      >
        <MdOutlineArrowForwardIos className="ml-[.3rem] text-third text-4xl" />
      </div>
      {nav ? (
        <div className="z-10 absolute bottom-0 w-full h-10 flex justify-center items-center">
          {children.map((slide, index) => (
            <button
              className={`bg-black/60 w-10 h-2 mx-2 rounded-md ${
                index === selectedIndex ? "bg-blue-600" : ""
              }`}
              type="button"
              onClick={() => scrollTo(index)}
              key={index}
            ></button>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
