import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className=" flex justify-between py-3 sm:py-7 px-4 sm:px-20  w-full items-center">
      <h1 className="text-blue-400 text-2xl sm:text-3xl font-bold cursor-default">
        VO<span className="text-gray-500">Series</span>List
      </h1>
      <div className="flex gap-4 text-base sm:text-2xl font-medium cursor-pointer ">
        <Link href="/">
          <p className="hover:text-blue-400 text-gray-500">Home</p>
        </Link>
        <Link href="/drakor">
          <p className="hover:text-blue-400 text-gray-500">Drakor</p>
        </Link>
        <Link href="/anime">
          <p className="hover:text-blue-400 text-gray-500">Anime</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
