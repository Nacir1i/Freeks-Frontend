import Logo from "./Logo";
import Button from "./Button.js";

const Header = () => {
  return (
    <header>
      <Logo />
      <div className="flex-center headerBtn">
        <Button color="#e3f6f5" text="Refresh" />
        <Button color="#bae8e8" text="Add" />
      </div>
    </header>
  );
};

export default Header;
