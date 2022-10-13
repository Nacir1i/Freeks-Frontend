import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-full bg-stone-800 flex flex-col justify-center items-center">
      <h1 className="my-4 text-8xl md:text-9xl text-red-600 text-center">
        404. Page not found
      </h1>
      <p className="my-4">
        Click
        <Link to="/" className="text-lg mx-2 text-yellow-400">
          HERE
        </Link>
        to navigate to home page
      </p>
    </div>
  );
};

export default Error;
