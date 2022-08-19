import React from "react";
import axios from "axios";
import dateFormat from "dateformat";
import * as Components from "../../Components";
import { serverAnime } from "../../config";

const AnimeAll = ({ anime, animeAll }) => {
  return (
    <>
      <Components.Nav />
      <Components.Meta title="Anime" />
      <div className="bg-blue-300 w-full mx-auto py-10 sm:px-20 md:px-20 lg:px-40 ">
        <div className=" grid gap-5  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {anime.data.map(data => (
            <Components.MovieCard
              key={data.id}
              link={`/anime/trending/${data.id}`}
              img={data.attributes.posterImage.large}
              title={data.attributes.slug}
              subTitle={data.attributes.ageRatingGuide}
              date={dateFormat(data.attributes.createdAt, "d mmmm yyyy")}
            />
          ))}
          {animeAll.data.map(data => (
            <Components.MovieCard
              key={data.id}
              link={`/anime/popular/${data.id}`}
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
};

export default AnimeAll;

export async function getStaticProps() {
  const res = await axios(`${serverAnime}trending/anime`);
  const response = await axios(`${serverAnime}anime`);

  const anime = res.data;
  const animeAll = response.data;

  return {
    props: { anime, animeAll },
  };
}
