import React from 'react';
import { FaFileDownload, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const { title, id, total_student, price, instructor, thumbnail_url, rating, image_url } = singleCourse;
    console.log(singleCourse);

    return (
        <div className="cursor-pointer card rounded-md card-compact bg-gray-800  border-green-500 items-center ">
            <div className="card-body items-center text-center m-5 ">
                <div className='flex items-center gap-10'>
                    <h2 className="card-title text-white text-4xl">{title}</h2>
                    <div className='text-white text-3xl'>
                        <FaFileDownload></FaFileDownload>
                    </div>
                </div>
            </div>
            <button className="bg-btn-color bg-gray-900 text-black py-5 px-4  rounded-b  bottom-0 w-full flex justify-between items-center gap-3">
                <div className='flex gap-5'>
                    <div className='flex  items-center justify-between gap-3 border-r pr-5 border-slate-600'>
                        <img className=' w-14 h-14 text-center rounded-full border-4 border-white ' src={instructor?.img} alt="" />
                        <div className='flex flex-col text-start'>
                            <p className=' text-slate-500'>Instructor</p>
                            <p className='text-slate-200'>{instructor.name}</p>
                        </div>
                    </div>
                    {/* <div className='flex  items-center justify-between gap-3 border-r pr-5 border-slate-600'>
                        <div className='flex flex-col text-start gap-1'>
                            <div className='flex gap-1 text-slate-400 text-lg'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStarHalfAlt></FaStarHalfAlt>
                            </div>
                            <p className='text-slate-200'>Review: {rating.number}</p>
                        </div>
                    </div> */}
                    <div className='flex  items-center justify-between gap-3 border-r pr-5 border-slate-600'>
                        <div className='flex flex-col text-start'>
                            <p className=' text-slate-500'>Review</p>
                            <div className='flex items-center gap-2'>

                                <p className='text-slate-200'>{rating.number}</p>
                            </div>

                        </div>
                    </div>
                    <div className='flex  items-center justify-between gap-3 border-r pr-5 border-slate-600'>
                        <div className='flex flex-col text-start'>
                            <p className=' text-slate-500'>Students</p>
                            <p className='text-slate-200'>{total_student}</p>
                        </div>
                    </div>
                </div>
                <div className='text-green-400 text-3xl font-semibold'>
                    <p>{price}</p>
                </div>
            </button>
            <figure><img className='w-[100%]' src={image_url} alt="Shoes" /></figure>
            <div className='flex flex-col items-center'>
                <img className='mt-5 mb-2 w-16 h-16 text-center rounded-full border-4 border-white ' src='' alt="" />
                <p className='text-slate-500'></p>
            </div>
            <div className="card-body items-center text-center mb-3">
                <div className='text-green-400 text-xl font-semibold'>
                    <p></p>
                </div>
            </div>
            <button className="bg-btn-color bg-gray-900 text-black py-3 px-4 rounded-b  bottom-0 w-full flex justify-between items-center  gap-3">
                <div className='text-slate-300 font-semibold flex justify-center items-center gap-2'>

                    <p className='text-md'></p>
                </div>

            </button>
        </div>
    );
};

export default CourseDetails;