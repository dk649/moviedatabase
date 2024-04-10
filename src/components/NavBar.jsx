"use client";
import React from "react";
import NavbarItem from "./NavbarItem";
import { useSearchParams } from "next/navigation";

const NavBar = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div className="flex dark:bg-gray-600 bg-gray-300 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      {console.log(genre)}
    </div>
  );
};

export default NavBar;
