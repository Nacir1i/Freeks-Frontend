import LoadingSVG from "./LoadingSVG";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-stone-800">
      <LoadingSVG className="mr-3 w-7 h-7 md:h-12 md:w-12 animate-spin text-yellow-300" />
      <span className="font-medium text-xl md:text-3xl"> Processing... </span>
    </div>
  );
};

export default Loading;
