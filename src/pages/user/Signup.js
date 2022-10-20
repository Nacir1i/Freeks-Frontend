import { useContext, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { axiosAPI } from "../../api/axios";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import Input from "../../components/Input";
// import Button from "../../components/Button";
import Loading from "../../components/LoadingSVG";

const Signup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const handlError = (err) => {
    setError(err);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };
  const handlIsLoading = (state) => {
    setIsLoading(state);
  };

  const createUser = async (data) => {
    handlIsLoading(true);
    const userData = data;
    if (userData.password !== userData.confirm) {
      handlError("Please confirm Password");
      handlIsLoading(false);
      return;
    }
    try {
      const response = await axiosAPI({
        method: "POST",
        url: "user/create",
        data: {
          username: userData.username,
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
    console.log(data);
  };
  return (
    <div className="w-full h-full flex justify-center items-center bg-stone-800">
      <div className="relative hidden w-1/2 h-full p-4 bg-porp bg-[url('./imgs/webp/controller3.webp')] bg-no-repeat bg-center md:flex items-end">
        <div className="w-full z-50">
          <h1 className="text-3xl">Account creation</h1>
          <p className="text-xl">
            Having an accout will give you access to more content, such as
            tournoments
          </p>
        </div>
      </div>
      <section className="hidden md:block layer1 aspect-vertical w-[19rem] h-full"></section>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
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
            name="username"
            type="text"
            title="Username :"
            icon={
              <AiOutlineUser className="w-[15%] bg-white text-black text-2xl" />
            }
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <Input
            register={register}
            name="email"
            type="email"
            title="Email :"
            icon={
              <MdAlternateEmail className="w-[15%] bg-white text-black text-2xl" />
            }
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Input
            register={register}
            name="password"
            type="password"
            title="Password :"
            icon={
              <RiLockPasswordLine className="w-[15%] bg-white text-black text-2xl" />
            }
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <Input
            register={register}
            name="confirm"
            type="password"
            title="Confirm Password :"
            icon={
              <RiLockPasswordLine className="w-[15%] bg-white text-black text-2xl" />
            }
          />
          {isLoading ? (
            <div className="w-[100%] mt-4 p-2 bg-porp-2 rounded-md flex justify-center cursor-default">
              <Loading className="mr-3 w-3 h-3 md:h-6 md:w-6 animate-spin text-purple-900" />
            </div>
          ) : (
            <button
              className={
                isValid
                  ? "w-[100%] mt-4 p-2 bg-porp rounded-md flex justify-center"
                  : "w-[100%] mt-4 p-2 bg-porp-2 rounded-md flex justify-center cursor-default"
              }
              type="submit"
              disabled={!isValid}
            >
              Login
            </button>
          )}
        </form>
        <p className="mt-4">
          Or{" "}
          <Link to="/user/login" className="text-yellow-300">
            LOGIN
          </Link>{" "}
          if you have an account
        </p>
      </div>
    </div>
  );
};

export default Signup;
