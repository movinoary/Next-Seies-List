import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ link, img, title, subTitle, date }) => {
  return (
    <Link href={link}>
      <div className="movie_card">
        <div className="movie_image">
          <Image
            src={img}
            alt={title}
            width={1080}
            height={1920}
            layout="responsive"
            priority="lazy"
          />
        </div>
        <div className="movie_desc">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <p> Release :{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
