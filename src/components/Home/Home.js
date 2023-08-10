import React, { useEffect, useState } from "react";
import "./Home.css";
import Blogs from "../Blogs/Blogs.js";
import Cart from "../Cart/Cart.js";
const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleAddToCart = () => {
    console.log("blog added cart");
  };

  return (
    <div className="grid grid-rows-2 grid-flow-row lg:grid-flow-col  ">
      <div className="row-span-4 m-2 lg:m-10 mb-0 lg:mb-0">
        <div className="grid grid-rows-6 sm:grid-rows-3 md:grid-rows-3 gap-5  ">
          {
            blogs.map (blog => <Blogs
            key={ blog.id}
            blog={blog}
            handleAddToCart={handleAddToCart}
            ></Blogs>)
          }
        </div>
      </div>
      <div className="row-span-1 grid-cols-1  bg-white mt-3 sm:mt-3 lg:mt-2 shadow-lg sm:m-2 lg:mr-36 lg:ml-12 rounded-lg sm:rounded-lg lg:rounded-none  ">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
