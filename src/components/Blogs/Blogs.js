import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Blogs.css";
const Blogs = ({ blog, handleAddToCart }) => {
  console.log(blog);
  const { cover_image, author_image, author_name, title, time, date } = blog;
  return (
    <div className="card  bg-base-100 shadow-xl border-2  h-[460px] rounded-lg font-serif relative">
      <figure className=" py-3">
        <img src={cover_image} alt="Salat" className="w-full h-80 rounded-lg" />
      </figure>
      <div className=" flex justify-between mt-2 mx-2">
        <div className="flex items-center ">
          <div>
            <img
              className="w-12 h-12 lg:w-12 lg:h-12 rounded-2xl"
              src={author_image}
              alt=""
            />
          </div>
          <div className="ml-4">
            <h1 className="text-sm lg:text-lg font-bold">{author_name}</h1>
            <p className="text-sm font-semibold">
              <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon> {date}
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <h1 className="text-sm lg:text-lg font-bold">{time}Min Read</h1>
          </div>
          <div>
            <button className="ml-2">
              <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
       <div className="font-bold text-left text-2xl">
       <h1 className="mt-4">{title}</h1>
       <p className="text-sm font-medium mt-4 mb-0"><span>#beginners #programming</span></p>
       </div>
        <div className="mb-2 mt-0 ml-2 flex justify-start">
          <button
            onClick={() => handleAddToCart()}
            className="border-2 bg-base-100 rounded-lg p-2 mt-5 text-blue font-serif font-semibold "
          >
            Mark as read
          </button>
        </div>
      </div>
  );
};

export default Blogs;
