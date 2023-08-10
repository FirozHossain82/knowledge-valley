import React from 'react';

const Cart = () => {
    return (
        <div className=''>
            <h2 className='text-lg font-serif font-semibold m-2 mb-6' >Prayer Details</h2>
            <div>
                <div className='bg-green-200 rounded-lg m-2 flex justify-between mb-8 p-3'>
                    <p className='text-lg font-sans font-semibold'>Spent time on read:</p>
                    <p>{} minutes</p>
                </div>
                <div className='bg-cyan-200 rounded-lg m-2 flex justify-between mb-8 p-3'>
                    <p className='text-lg font-sans font-semibold'>Bookmarked Blogs:</p>
                    <p>{} </p>
                </div>
                {/* <div  className='bg-purple-400 text-center rounded-lg m-2 mb-5 p-3'>
                    <button className='text-lg font-sans font-semibold'>Activity Completed</button>
                </div> */}
                {/* <ToastContainer></ToastContainer> */}
            </div>
        </div>
    );
};

export default Cart;