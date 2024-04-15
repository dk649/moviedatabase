"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };

  const searchHahdler = () => {
    alert("search");
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Search movie..."
        className="w-full h-14 placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search}
        // onClick={searchHahdler}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
