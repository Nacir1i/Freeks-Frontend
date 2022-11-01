import axios from "axios";
import Slideshow from "../components/Slideshow";
import Events from "../components/Events";

export default function Home({ data }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Slideshow />
      <Events data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    "http://localhost:3001/api/event/getAllEvents"
  );

  return {
    props: {
      data: data.events,
    },
  };
}
