
import { FaFileDownload, } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import React, { createRef } from "react";
import Pdf from "react-to-pdf";
const ref = createRef();

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const { title, id, total_student, price, instructor, rating, image_url, details } = singleCourse;
    console.log(singleCourse);

    return (
        <div className="cursor-pointer card rounded-md card-compact bg-gray-800  border-green-500 items-center ">
            <div className="card-body items-center text-center m-5 border-b border-slate-600">
                <div className='flex items-center gap-5  lg:gap-10'>
                    <h2 className="card-title text-white text-2xl lg:text-4xl">{title}</h2>
                    <Pdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => <button onClick={toPdf}> <div className='text-white text-3xl'>
                            <FaFileDownload></FaFileDownload>
                        </div></button>}
                    </Pdf>
                </div>
            </div>
            <div ref={ref} className='text-slate-300 pb-5 text-center '>
                <p className='font-bold text-white'>Course Details</p>
                <p>Course Name: <span className='text-green-500'>{title}</span></p>
                <p>Course Instructor: <span className='text-green-500'>{instructor.name}</span></p>
                <p>Course Rating: <span className='text-green-500'>{rating.number}</span></p>
                <p>Total Student: <span className='text-green-500'>{total_student}</span></p>
                <p>Course Price: <span className='text-green-500'>{price}</span></p>
            </div>


            <button className="bg-btn-color bg-gray-900 text-black py-5 px-4  rounded-b  bottom-0 w-full flex justify-between items-center gap-3">
                <div className='flex lg:flex-row flex-col gap-5'>
                    <div className='flex  items-center justify-between gap-3 border-r pr-5 border-slate-600'>
                        <img className=' w-14 h-14 text-center rounded-full border-4 border-white ' src={instructor?.img} alt="" />
                        <div className='flex flex-col text-start'>
                            <p className=' text-slate-500'>Instructor</p>
                            <p className='text-slate-200'>{instructor.name}</p>
                        </div>
                    </div>
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
            <img className='w-[100%]' src={image_url} alt="Shoes" />
            <div className="card-body items-center text-start mb-3 text-white">
                <button className="bg-btn-color bg-gray-900 text-black py-3 px-4 rounded-b  bottom-0 w-full flex justify-between items-center  gap-3">
                    <p className='text-2xl text-slate-200'>Course Description</p>
                </button>
                <p className='text-md lg:text-lg py-4 text-slate-300'>{details}</p>
            </div>


            <div className="bg-btn-color bg-gray-900 text-black py-3 px-4 rounded-b  bottom-0 w-full flex justify-between items-center  gap-3">
                <div className='text-green-400 text-3xl font-semibold'>
                    <p>{price}</p>
                </div>
                <Link to={`/checkout/${id}`} className='pl-10  lg:pl-10'><button className="btn  btn-md  btn-success font-semibold ">Get premium access</button></Link>
            </div>
        </div>
    );
};

export default CourseDetails;