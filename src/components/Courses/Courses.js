import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../shared/SideNav/SideNav';

const Courses = () => {
    return (
        <div className='grid grid-cols-12 px-10 lg:px-[7%] lg:py-5'>
            <div className="col-span-12 lg:col-span-2 hidden lg:block bg-red-500">
                <SideNav></SideNav>
            </div>
            <div className="col-span-12 lg:col-span-10 bg-green-500">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Courses;