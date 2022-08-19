import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="font-bold text-gray-400 p-4 max-w-7xl mx-auto container tracking-widest text-3xl">
        <Link href="/">
          <p className="text-base md:text-2xl cursor-pointer ">
            VO<span className="text-blue-400">Series</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
