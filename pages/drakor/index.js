import React from "react";
import axios from "axios";
import { serverDrakor } from "../../config";
import { Meta, MovieCard } from "../../Components";

const Drakor = ({ drakor }) => {
  return (
    <>
      <Meta title="Drakor" />
      <div className="bg-blue-300 w-full mx-auto py-10 sm:px-20 md:px-20 lg:px-40 ">
        <div className=" grid gap-5  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {drakor.items
            .sort((a, b) => (a.first_air_date < b.first_air_date ? 1 : -1))
            .map(data => (
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
    </>
  );
};

export default Drakor;

export async function getStaticProps() {
  const res = await axios(
    `${serverDrakor}list/8214019?api_key=${process.env.API_KEY}`
  );
  const drakor = res.data;

  return {
    props: { drakor },
  };
}
