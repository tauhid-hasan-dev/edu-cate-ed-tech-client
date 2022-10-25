import React from 'react';

const CourseCard = ({ course }) => {
    const { title, id, total_student, price, instructor, thumbnail_url, rating } = course;
    return (

        <div className="card card-compact h-[500px] bg-gray-800 border-2 border-green-500 items-center ">
            <figure><img src={thumbnail_url} alt="Shoes" /></figure>
            <div className='flex flex-col items-center'>
                <img className='mt-5 mb-2 w-16 h-16 text-center rounded-full border-4 border-white ' src={instructor?.img} alt="" />
                <p className='text-slate-500'>{instructor.name}</p>
            </div>

            <div className="card-body items-center">
                <h2 className="card-title text-white">{title}</h2>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            <button className="bg-btn-color bg-gray-900 text-black py-3 px-4 rounded-b absolute bottom-0 w-full flex  gap-3">
                <div>
                    <p className='text-slate-200'>Add to cart|</p>
                </div>


            </button>
        </div>


    );
};

export default CourseCard;