import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup = () => {
  const {
    login,
    handlUsername,
    username,
    handlEmail,
    email,
    handlPassword,
    password,
  } = useContext(UserContext);
  const createUser = async () => {
    const user = {
      username,
      email,
      password,
    };

    const res = await fetch("http://localhost:3001/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    login(data.user, data.token);
  };
  return (
    <div className="flex-center container">
      <div className="flex-center signContainer">
        <div className="flex-center title">
          <h1>Welcome to Freeks :</h1>
        </div>
        <div className="inputDiv">
          <Input
            type="text"
            title="Username :"
            required={true}
            onChange={handlUsername}
          />
          <Input
            type="email"
            title="Email :"
            required={true}
            onChange={handlEmail}
          />
          <Input
            type="password"
            title="Password :"
            required={true}
            onChange={handlPassword}
          />
        </div>
        <div className="flex-center buttonDiv">
          <Button
            text="Create and account"
            event={createUser}
            color="black"
            backgroundColor="white"
          />
          <p>
            Or <Link path="/user/login">LOGIN</Link> if you have an account
          </p>
        </div>
      </div>
      <div className="flex-center indexContainer">
        <div className="flex-center title">
          <h1>Glad to have you here</h1>
        </div>
        <p>
          Having an account will give access to more content and informations
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Signup;
