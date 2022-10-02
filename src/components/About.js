import AboutImg from "../imgs/illustration-gamer.png";
import { CheckIcon } from "@heroicons/react/20/solid";

const About = () => {
  const items = [
    "Ryzen 5 3400ge CPU",
    "8 RAM DDR4",
    "AMD Radeon RX Vega 11",
    "MSI 24' 1080p 144hz monitor",
    "Playstation 5 & Playstation 4",
    "100Mgb fibre optic internet",
  ];
  const itemsList = items.map((item, index) => (
    <li className="flex mt-3" key={index}>
      <CheckIcon className="mr-2 w-5" />
      <p>{item}</p>
    </li>
  ));

  return (
    <div
      id="about"
      className="bg-bag h-[39rem] flex justify-center md:justify-around items-center flex-col md:flex-row"
    >
      <div className="w-[80%] md:h-[50%] md:w-[42rem]">
        <h1 className="font-semibold text-2xl md:text-4xl text-center">
          What is Freekscop :
        </h1>
        <p className="text-purple-300 md:text-2xl">
          Freekscop is every gamer's dream. A cyber equiped with powerfull
          gaming PCs, And a fast internet speed
        </p>
        <div className="md:text-xl">
          <p className="mt-6">Our gaming arsenal consists of :</p>
          <ul className="pl-4">{itemsList}</ul>
        </div>
      </div>
      <img src={AboutImg} alt="#" className="w-[250px] md:w-[34rem] mt-8" />
    </div>
  );
};

export default About;
