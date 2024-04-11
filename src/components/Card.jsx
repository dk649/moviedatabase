import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2">
      <h2 className="text-lg p-1 font-semibold truncate">
        {result.title || result.name}
      </h2>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          size="100vw"
          alt="movie"
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <p className="flex items-center gap-2">
            {result.release_date || result.first_air_date}
            <FiThumbsUp />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default Card;
