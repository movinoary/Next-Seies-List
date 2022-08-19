import React from "react";
import axios from "axios";
import Image from "next/image";
import { serverDrakor } from "../../config";
import { CastCard, DetailCard, Meta, VideoCard } from "../../Components";

const DrakorDetail = ({ drama, cast, video }) => {
  return (
    <>
      <Meta title={drama.name} />
      <div className="container max-w-4xl mx-auto pt-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${drama.backdrop_path}`}
          width={1000}
          height={600}
          className="rounded-md"
          alt={drama.name}
        />
        <div className="px-10 ">
          <div className="-mt-60">
            <Image
              src={`https://image.tmdb.org/t/p/w500${drama.poster_path}`}
              width={200}
              height={300}
              className="rounded-md "
              alt={drama.name}
            />
          </div>
          <h1 className="font-bold text-3xl my-2 text-right -mt-1 lg:-mt-16">
            {drama.name}
          </h1>
          <h1 className="font-bold text-xl my-2 text-right text-gray-600">
            {drama.original_name}
          </h1>

          {drama.tagline ? (
            <p className="text-gray-600 text-sm mt-4 italic">{drama.tagline}</p>
          ) : null}
          <p className="text-gray-600 text-sm mt-4">{drama.overview}</p>
          <DetailCard item={drama} />
          <h1 className="text-3xl mt-10 bold border-b-2 border-gray-500">
            Cast
          </h1>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5">
            {cast.cast.map(data => (
              <CastCard item={data} key={data.id} />
            ))}
          </div>
          <div>
            <div>
              <h1 className="text-3xl mt-10 bold border-b-2 border-gray-500">
                Video
              </h1>
              {video.length !== 0 ? (
                <>
                  {video.map(data => (
                    <VideoCard key={data.id} data={data} />
                  ))}
                </>
              ) : (
                <h1>No video </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await axios(
    `${serverDrakor}tv/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const response = await axios(
    `${serverDrakor}tv/${id}/credits?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const responses = await axios(
    `${serverDrakor}tv/${id}/videos?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const drama = res.data;
  const cast = response.data;
  const video = responses.data.results;
  return {
    props: { drama, cast, video },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${serverDrakor}list/8214019?api_key=9f22c743b4f150fea0af41e0d6b5bed0`
  );
  const movies = res.data.items;

  const ids = movies.map(movie => movie.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default DrakorDetail;
