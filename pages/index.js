import axios from "axios";
import { serverAnime, serverDrakor } from "../config";
import dateFormat from "dateformat";
import { Header, MovieCard } from "../Components";

export default function Home({ drakor, anime }) {
  return (
    <>
      <div className="bg-blue-300 w-full mx-auto py-10 sm:px-20 md:px-20 lg:px-40 ">
        <h1 className="text-3xl mt-5 mb-10 border-b-2 text-white">
          Drama Korea
        </h1>
        <div className=" grid gap-5  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {drakor.items.map(data => (
            <MovieCard
              key={data.id}
              link={`/drakor/${data.id}`}
              img={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              title={data.name}
              subTitle={data.original_name}
              date={data.first_air_date}
            />
          ))}
        </div>
      </div>
      <div className="bg-blue-300 w-full mx-auto py-10 sm:px-20 md:px-20 lg:px-40 ">
        <h1 className="text-3xl mt-5 mb-10 border-b-2 text-white">Anime</h1>
        <div className=" grid gap-5  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {anime.data.map(data => (
            <MovieCard
              key={data.id}
              link={`/anime/trending/${data.id}`}
              img={data.attributes.posterImage.large}
              title={data.attributes.slug}
              subTitle={data.attributes.ageRatingGuide}
              date={dateFormat(data.attributes.createdAt, "d mmmm yyyy")}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${serverDrakor}list/8214210?api_key=${process.env.API_KEY}`
  );
  const response = await axios(`${serverAnime}trending/anime`);

  const drakor = res.data;
  const anime = response.data;

  return {
    props: { drakor, anime },
  };
}
