import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar bg-base-100 px-32 py-6 bg-purple-50">
      <div className="flex-1">
        <a className="btn btn-ghost  text-2xl font-bold font-serif text-orange-400">Knowledge <span className="text-purple-500">-Valley</span></a>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal font-bold text-lg header">
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
