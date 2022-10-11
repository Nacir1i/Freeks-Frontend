import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { axiosAPI } from "../../api/axios";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup = () => {
  let [error, setError] = useState(null);
  const { login } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const handlError = (err) => {
    setError(err);
    setInterval(() => {
      setError(null);
    }, 5000);
  };

  const createUser = async (data) => {
    const userData = data;
    try {
      const response = await axiosAPI({
        method: "POST",
        url: "user/login",
        data: {
          password: userData.password,
          email: userData.email,
        },
      });
      const resData = response.data;
      login(resData.user, resData.token);
    } catch (error) {
      if (error.response.resData) {
        handlError(error.response.resData.message);
      } else {
        handlError(error.message);
      }
    }
  };
  const onSubmit = (data) => {
    // createUser(data);
    console.log(data);
  };
  return (
    <div className="w-full h-full flex justify-center items-center bg-stone-800">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
        {error ? (
          <div className="absolute z-50 top-28 left-auto w-[80%] md:w-96 h-16 p-2 flex items-center justify-center bg-red-400 rounded-sm text-red-800 font-bold">
            {error}
          </div>
        ) : (
          <></>
        )}
        <div className="text-center">
          <h1 className="text-xl md:text-3xl">We are happy to have you here</h1>
          <p className="text-sm md:hidden">
            Having an accout will give you access to more content
          </p>
        </div>
        <form
          className="w-72 my-4 flex flex-col justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <Button
            className="w-[50%] mt-4 p-2 bg-porp rounded-md"
            text="Create Account"
            type="submit"
          />
        </form>
        <p className="mt-4">
          Or{" "}
          <Link to="/user/signup" className="text-yellow-300">
            SIGNUP
          </Link>{" "}
          if you do not have an accout
        </p>
      </div>
      <section className="hidden md:block layer2 aspect-vertical w-[19rem] h-full"></section>
      <div className="relative hidden w-1/2 h-full p-4 bg-porp bg-[url('./imgs/controller3.png')] bg-no-repeat bg-center md:flex items-end">
        <div className="w-full z-50 text-right">
          <h1 className="text-3xl">Login</h1>
          <p className="text-xl">
            Having an accout will give you access to more content, such as
            tournoments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
