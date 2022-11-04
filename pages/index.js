import axios from "axios";
import Slideshow from "../components/Slideshow";
import Events from "../components/Events";
import Location from "../components/Location";
import Review from "../components/Review";

export default function Home({ data }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Slideshow />
      <Events data={data} />
      <Location />
      {/* <Review /> */}
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://freeks-api.onrender.com/api/event/getAllEvents"
  );

  return {
    props: {
      data: data.events,
    },
  };
}
