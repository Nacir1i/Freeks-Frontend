import logo from "../imgs/logo";

const Logo = () => {
  return (
    <div className="Logo flex-center">
      <img src={logo} alt="Logo" style={{ width: "50px" }}></img>
      <h2>Task Manager</h2>
    </div>
  );
};

export default Logo;
