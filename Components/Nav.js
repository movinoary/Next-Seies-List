import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="nav_title">
        VO<span>Series</span>List
      </h1>
      <div className="nav_menu">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/drakor">
          <p>Drakor</p>
        </Link>
        <Link href="/anime">
          <p>Anime</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
