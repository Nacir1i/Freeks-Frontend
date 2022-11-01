import Image from "next/dist/client/image";
import map from "../public/controller3.png";
export default () => {
  return (
    <div className="">
      <div className="flex">
        <div className="m-auto ">
          <h1 className="flex justify-center mt-10 font-normal">Location</h1>
          <h1 className="flex justify-center font-bold	">simply dummy text of the printing and typesetting industry.</h1>
        </div>
      </div>
      <div className="flex justify-center w-full items-center">
        <div className="">
          <Image src={map} alt="loc" className="content-center flex " />
        </div>
        <div className="items-center justify-center">
          <Image src={map} alt="img" className=" content-center flex " />
        </div>
      </div>
    </div>
  );
};
