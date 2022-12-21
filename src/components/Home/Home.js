import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bg from '../../images/bb.svg'

const Home = () => {

    return (
        <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900   flex flex-col lg:flex-row gap-20 lg:px-28 lg:py-20 px-10 py-32 ' >
            <div className='flex flex-col items-center lg:items-start gap-5 order-1 lg:order-0 '>
                <div className='flex flex-col gap-5 justify-center text-center lg:text-start'>
                    <h1 className='text-white text-3xl lg:text-5xl font-bold'>We teach Web Development</h1>
                    <h1 className='text-slate-300 text-lg lg:text-xl font-regular'>Our Job placement team will not leave you untill you give up</h1>
                </div>
                <div >
                    <Link to='/courses' className=''><button className="rounded-sm btn  btn-sm lg:btn-md btn-success"><span className='mr-3 font-bold text-slate-800'>See Our Courses</span> <FaArrowRight ></FaArrowRight></button></Link>
                </div>
            </div>
            <div className='order-0 lg:order-1'>
                <img src={bg} alt="" />
            </div>

        </div>
    );
};

export default Home;