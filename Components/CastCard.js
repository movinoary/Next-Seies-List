import Image from "next/image";
import React from "react";

const CastCard = ({ item }) => {
  return (
    <div className="flex flex-col justify-center  overflow-hidden items-center bg-blue-300 rounded-md">
      <div className="rounded-md -mt-5">
        <Image
          src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
          width={150}
          height={250}
          alt={item.name}
        />
      </div>
      <div className="bg-blue-300 text-center w-full ">
        <h1 className="text-xl text-gray-700">{item.name}</h1>
        <p className="text-white">{item.character}</p>
      </div>
    </div>
  );
};

export default CastCard;
