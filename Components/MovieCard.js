import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ link, img, title, subTitle, date }) => {
  return (
    <Link href={link}>
      <div className=" rounded-md  my-10 h-full cursor-pointer">
        <div className="-mt-11 w-9/12 rounded-md overflow-hidden mx-auto shadow-xl hover:-mt-9 transition-all ">
          <Image
            src={img}
            alt={title}
            width={1080}
            height={1920}
            layout="responsive"
            priority="lazy"
          />
        </div>
        <div className=" text-center mt-3 bg-white/70 rounded-md py-2">
          <h1 className="text-xl ">{title}</h1>
          <h2>{subTitle}</h2>
          <p> Release :{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
