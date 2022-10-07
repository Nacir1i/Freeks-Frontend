const Pack = ({ title, comment, offers, recommended }) => {
  const offersList = offers.map((offer, index) => (
    <li key={index} className="text-2xl">
      <p>{offer}</p>
    </li>
  ));
  return (
    <div className="w-80 h-72 md:h-96 bg-slate-700 mx-4 my-8 md:m-8 flex flex-col justify-between items-center rounded-md">
      {recommended ? (
        <div className="w-full h-12 bg-amber-400 flex items-center justify-center text-black font-semibold">
          Recommended
        </div>
      ) : (
        <div className="w-full h-12 flex items-center justify-center text-black font-semibold"></div>
      )}
      <div className="h-1/2 h-[30%] flex flex-col justify-center text-center">
        <h1 className="text-4xl">{title}</h1>
        <small>{comment}</small>
      </div>
      <ul className="w-[90%] h-[50%] border broder-white bg-slate-800 p-4 mb-4 flex flex-col justify-center items-center">
        {offersList}
      </ul>
    </div>
  );
};

export default Pack;
