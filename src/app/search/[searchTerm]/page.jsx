import Results from "@/components/Results";
import React from "react";

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;
  console.log(searchTerm);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1$include_adult=false`
  );
  const data = await res.json();
  const results = data.results;

  if (results.length === 0) {
    <h1>no results found</h1>;
  }
  return <div>{results && <Results results={results} />}</div>;
};

export default SearchPage;
