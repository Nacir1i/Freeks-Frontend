import logo from "../imgs/FreeksTrans.png";

const Logo = () => {
  return (
    <div className="ml-2 md:ml-12 flex items-center justify-self-center">
      <img src={logo} alt="Logo" className="md:w-[5rem] w-16"></img>
    </div>
  );
};

export default Logo;
