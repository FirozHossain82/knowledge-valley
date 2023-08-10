import React from 'react';
import './Blogs.css';
const Blogs = ({blog, handleAddToCart}) => {
    console.log(blog);
    const {cover_Image,author_image,author_name,title,time} = blog;
    return (
        <div className="card  bg-base-100 shadow-xl border-2  h-[460px] rounded-lg font-serif relative">
      <figure className="px-3 py-3">
        <img alt="Salat" className="w-full h-40 rounded-lg" />
      </figure>
      <div className="text-justify px-3">
                <h2 className="text-center text-xl font-bold py-3"></h2>
                <p className="py-2 font-bold">
                Time : <span className="text-green-700 text-lg"> min</span>
                </p>
                <p className="font-semibold font-sans"></p>
                <div className="card-actions py-4">
                <button onClick={() => handleAddToCart()} className="border-2 bg-cyan-400 rounded-lg p-2 mt-5 text-blue font-serif font-              semibold absolute bottom-1 ">
                    Prayed Today
                </button>
        </div>
      </div>
    </div>
    );
};

export default Blogs;