import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup = () => {
  const { login } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const createUser = async (user) => {
    const res = await fetch("http://localhost:3001/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.status === 401) {
      console.log("no data was provided");
      return;
    }
    if (res.status === 409) {
      console.log("username or email already exists");
      return;
    }
    if (res.status === 500) {
      console.log("server error");
      return;
    }
    const data = await res.json();
    login(data.user, data.token);
  };
  const onSubmit = (data) => {
    createUser(data);
  };
  return (
    <div className="flex-center container">
      <div className="flex-center signContainer">
        <div className="flex-center title">
          <h1>Welcome to Freeks :</h1>
        </div>
        <form className="flex-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputDiv">
            <Input
              register={register}
              name="username"
              type="text"
              title="Username :"
              required={true}
            />
            <Input
              register={register}
              name="email"
              type="email"
              title="Email :"
              required={true}
            />
            <Input
              register={register}
              name="password"
              type="password"
              title="Password :"
              required={true}
            />
          </div>
          <div className="flex-center buttonDiv">
            <Button
              text="Create and account"
              type="submit"
              color="black"
              backgroundColor="white"
            />
            <p>
              Or <Link path="/user/login">LOGIN</Link> if you have an account
            </p>
          </div>
        </form>
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
