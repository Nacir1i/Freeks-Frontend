import Image from "next/dist/client/image";
import map from "../public/controller3.png";

export default function Location() {
  return (
    <div>
      <h1 className="justify-center">lmsfbao</h1>
      <div className="flex m-20">
        <Image src={map} alt="loc" className="float-left" />
        <Image src={map} alt="img" className="float-left" />
      </div>
    </div>
  );
}
