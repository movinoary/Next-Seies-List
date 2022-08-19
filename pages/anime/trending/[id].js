import axios from "axios";
import React from "react";
import Image from "next/image";
import { serverAnime } from "../../../config";
import { Meta } from "../../../Components";

const AnimeDetail = ({ anime }) => {
  const data = anime.data.attributes;

  return (
    <>
      <Meta title={data.canonicalTitle} />
      <div className="container max-w-4xl mx-auto pt-6">
        <Image
          src={data.coverImage.large}
          width={1000}
          height={600}
          className="rounded-md"
          alt={data.canonicalTitle}
        />
        <div className="px-10 ">
          <div className="-mt-60 ">
            <Image
              src={data.posterImage.large}
              width={200}
              height={300}
              className="rounded-md "
              alt={data.canonicalTitle}
            />
          </div>
          <h1 className="font-bold text-3xl my-2 text-right -mt-16">
            {data.canonicalTitle}
          </h1>
          <h1 className="font-bold text-xl my-2 text-right">
            {data.ageRatingGuide}
          </h1>
          <p className="text-gray-600 text-sm mt-4">{data.description}</p>
          <p className="text-gray-600 text-sm mt-4">{data.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await axios(`${serverAnime}anime/${id}`);

  const anime = res.data;

  return {
    props: { anime },
  };
}

export async function getStaticPaths() {
  const res = await axios(`${serverAnime}trending/anime`);

  const movies = res.data.data;
  const paths = movies.map(id => ({ params: { id: id.id } }));

  return {
    paths,
    fallback: false,
  };
}

export default AnimeDetail;
