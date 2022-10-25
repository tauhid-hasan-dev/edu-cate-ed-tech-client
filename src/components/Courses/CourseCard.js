import React from 'react';
import { FaArrowRight, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, id, total_student, price, instructor, thumbnail_url, rating } = course;
    return (
        <>
            <div className="cursor-pointer card rounded-md card-compact bg-gray-800 border border-green-500 items-center ">
                <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                <div className='flex flex-col items-center'>
                    <img className='mt-5 mb-2 w-16 h-16 text-center rounded-full border-4 border-white ' src={instructor?.img} alt="" />
                    <p className='text-slate-500'>{instructor.name}</p>
                </div>
                <div className="card-body items-center text-center mb-3">
                    <h2 className="card-title text-white">{title}</h2>
                    <div className='text-green-400 text-xl font-semibold'>
                        <p>{price}</p>
                    </div>
                </div>
                <button className="bg-btn-color bg-gray-900 text-black py-3 px-4 rounded-b  bottom-0 w-full flex justify-between items-center  gap-3">
                    <div className='text-slate-300 font-semibold flex justify-center items-center gap-2'>
                        <FaUsers className='text-lg '></FaUsers>
                        <p className='text-md'>{total_student}</p>
                    </div>

                    <Link to={`/courses/${id}`}> <p className='text-white  flex items-center gap-2 hover:text-green-400'>See details <FaArrowRight></FaArrowRight></p></Link>
                </button>
            </div>
        </>


    );
};

export default CourseCard;