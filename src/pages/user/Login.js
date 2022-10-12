import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { axiosAPI } from "../../api/axios";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/LoadingSVG";

const Signup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const handlError = (err) => {
    setError(err);
    setInterval(() => {
      setError(null);
    }, 5000);
  };
  const handlIsLoading = (state) => {
    setIsLoading(state);
  };

  const createUser = async (data) => {
    handlIsLoading(true);
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
      if (error.response.data) {
        handlError(error.response.data.message);
      } else {
        handlError(error.message);
      }
    }
    handlIsLoading(false);
  };
  const onSubmit = (data) => {
    createUser(data);
  };
  return (
    <div className="w-full h-full flex justify-center items-center bg-stone-800">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
        {isLoading ? (
          <div className="absolute z-49 top-28 md:top-44 left-auto w-[80%] md:w-96 h-16 p-2 flex items-center justify-center">
            <Loading className="mr-3 w-5 h-5 md:h-8 md:w-8 animate-spin text-yellow-300" />
          </div>
        ) : (
          <></>
        )}
        {error ? (
          <div className="absolute z-50 top-28 md:top-44 left-auto w-[80%] md:w-96 h-16 p-2 flex items-center justify-center bg-red-400 rounded-sm text-red-800 font-bold">
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
            text="Login"
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
