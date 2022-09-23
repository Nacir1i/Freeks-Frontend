import { useContext, useState } from "react";
import { axiosAPI } from "../../api/axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  let [error, setError] = useState(null);
  const { login } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const handlError = async (err) => {
    setError(err);
    setInterval(() => {
      setError(null);
    }, 5000);
  };

  const loginUser = async (user) => {
    try {
      const response = await axiosAPI({
        method: "POST",
        url: "user/login",
        data: user,
      });
      const data = response.data;
      login(data.user, data.token);
    } catch (error) {
      if (error.response.data) {
        handlError(error.response.data.message);
      } else {
        handlError(error.message);
      }
    }
  };

  const onSubmit = (data) => {
    loginUser(data);
  };

  return (
    <div className="flex-center containerLogin">
      <div className="flex-center signContainer">
        <div className="flex-center title">
          <h1>Welcome to Freeks :</h1>
        </div>
        <form className="flex-center" onSubmit={handleSubmit(onSubmit)}>
          {error ? (
            <div className="flex-center activeError">
              <p>{error}</p>{" "}
            </div>
          ) : (
            <div className="flex-center notActiveError"></div>
          )}
          <div className="inputDiv">
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
              text="Login"
              type="submit"
              color="black"
              backgroundColor="white"
            />
            <p>
              Don't have an Account ? <Link to="/user/signup">SIGNUP</Link>{" "}
              Right here
            </p>
          </div>
        </form>
      </div>
      <div className="flex-center indexContainer">
        <div className="flex-center title">
          <h1>Glad to have you here</h1>
        </div>
        <p>
          This is a Login page, if you didn't guess that alrady (y'all need
          je-sus)
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
