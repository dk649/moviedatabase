// "use client";
import React from "react";
import Image from "next/image";

async function MoviePage({ params }) {
  const movieId = params.id;
  console.log(movieId);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const movie = await res.json();
  // console.log(movie);
  console.log(movie.id);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg "
          alt="movie"
        ></Image>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-3 ">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3">{movie.overview} </p>
          <span className="font-bold">Release Date</span>

          <p>{movie.release_date || movie.first_air_date}</p>
          <p>Rating {movie.vote_count}</p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
