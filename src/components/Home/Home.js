import React, { useEffect, useState } from "react";
import "./Home.css";
import Blogs from "../Blogs/Blogs.js";
import Cart from "../Cart/Cart.js";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
 const [cart, setCart] = useState([]);
// const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleAddToCart = (blog) => {
    let newCart = [];
    const exists = cart.find(pd => pd.id ===pd.id);
    if(!exists){
        blog.quantity = 1;
        newCart=[...cart, blog]
    }
    else{
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd => pd.id !==blog.id);
        newCart=[...remaining,exists ]
    }
    setCart(newCart);
  }; 

 /*  const handleAddToCart = (duration)=>{
    const newTime = time + duration;
    setTime(newTime);
  } */
  return (
    <div className="grid grid-rows-4 lg:grid-rows-2 grid-flow-row lg:grid-flow-col  ">
      <div className="row-span-4 m-2 lg:m-10 mb-0 lg:mb-0">
        <div className="grid grid-rows-6 sm:grid-rows-3 md:grid-rows-3 gap-5  ">
          {
            blogs.map (blog => <Blogs
            key={ blog.id}
            blog={blog}
            handleAddToCart ={handleAddToCart}
            ></Blogs>)
          }
        </div>
      </div>
      <div className="row-span-1 lg:rounded-xl grid-cols-1  bg-white mt-3 sm:mt-3 lg:mt-2 shadow-lg sm:m-2 lg:mr-36 lg:ml-12 sm:rounded-lg ">
        <Cart
        /* time={time}
        key={time.id} */
        cart ={cart}
        key ={cart.id}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
