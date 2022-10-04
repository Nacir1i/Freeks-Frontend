import Pack from "./Pack";

const Packs = () => {
  return (
    <div
      id="packs"
      className="relative w-full md:h-3/5 bg-slate-900 flex flex-col justify-end items-center"
    >
      <section className="absolute top-0 w-full h-10 md:h-24 bg-bag clip polygon dp-3 md:d-3"></section>
      <h1 className="mt-14 font-semibold text-2xl md:text-4xl text-center">
        Pricing :
      </h1>
      <div className="flex flex-wrap justify-center">
        <Pack
          title="Standard Packs"
          comment="some meaningfull text"
          offers={["1H -----> 10DHS", "5H -----> 40DHS", "All-Day Pass 75DH"]}
          recommended={true}
        />
        <Pack
          title="Mega Packs"
          comment="some meaningfull text"
          offers={[
            "15H -----> 130DHS",
            "30H -----> 240DHS",
            "60H -----> 450DHS",
          ]}
        />
      </div>
    </div>
  );
};

export default Packs;
