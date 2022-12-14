import React from 'react';
import { FaStar, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, id, price, instructor, thumbnail_url, rating } = course;
    return (
        <>
            <Link to={`/courses/${id}`}>
                <div className="items-stretch cursor-pointer card rounded-md card-compact bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800  border-green-500 h-[420px] shadow-green-500">
                    <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                    <div className='flex flex-col items-center'>
                        <img className='mt-5 mb-2 w-16 h-16 text-center rounded-full border-4 border-white ' src={instructor?.img} alt="" />
                        <p className='text-slate-500'>{instructor.name}</p>
                    </div>
                    <div className="card-body items-center text-center mb-3">
                        <h2 className="card-title text-white">{title}</h2>

                    </div>
                    <button className="bg-btn-color bg-gray-900 text-black py-3 px-4 rounded-b  bottom-0 w-full flex justify-between items-center  gap-3">
                        <div className='text-slate-300  flex justify-center items-center gap-2'>
                            <FaStar></FaStar>
                            <p className='text-md'>{rating.number}</p>
                        </div>
                        <div className='text-green-400 text-xl font-semibold'>
                            <p>{price}</p>
                        </div>
                    </button>
                </div>
            </Link>

        </>

    );
};

export default CourseCard;