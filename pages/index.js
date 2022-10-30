import Slideshow from "../components/Slideshow";

export default function Home() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <Slideshow />
      <div className="z-20 absolute bottom-0 left-0 bg-[url('../public/waves4.svg')] aspect-ratio w-full bg-no-repeat bg-center bg-cover"></div>
    </div>
  );
}
