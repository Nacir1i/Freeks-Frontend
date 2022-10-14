const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full h-[70%] pt-10 md:h-full font-bold text-3xl bg-[url('./imgs/banner3.jpg')] md:bg-[url('./imgs/banner2.jpg')] bg-no-repeat bg-cover bg-center bg-local flex flex-col items-center justify-center"
    >
      <h1 className="md:text-7xl">WELCOME TO FREEKS</h1>
      <div className="w-[70%]">
        <p className="text-lg md:text-3xl text-center mt-4">
          Play, compete, and connect with us for the ultimate gaming experience
          !
        </p>
      </div>
      <div className="absolute bottom-[-1px] w-full h-10 md:h-24 bg-bag clip polygon bp-3 md:b-3"></div>
    </div>
  );
};

export default Home;
