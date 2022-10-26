import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bg from '../../images/ss.png'

const Home = () => {
    return (
        <div className='bg-black flex flex-col gap-10 lg:px-28 lg:py-56 px-10 py-32'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-white text-3xl lg:text-6xl font-bold'>We teach Web Development</h1>
                <h1 className='text-slate-300 text-lg lg:text-2xl font-regular'>Our Job placement team will not leave you untill you give up</h1>
            </div>
            <div >
                <Link to='/courses' className=''><button className="rounded-sm btn  btn-sm lg:btn-md btn-success"><span className='mr-3 font-bold text-slate-800'>See Our Courses</span> <FaArrowRight ></FaArrowRight></button></Link>
            </div>
        </div>
    );
};

export default Home;