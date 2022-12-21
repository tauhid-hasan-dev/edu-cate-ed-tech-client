import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../shared/SideNav/SideNav';

const Courses = () => {
    return (
        <div className='grid grid-cols-12 px-9 lg:px-[7%] py-10 lg:py-10 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 gap-10'>
            <div className="col-span-9 lg:col-span-3 lg:block ">
                <SideNav></SideNav>
            </div>
            <div className="col-span-9 lg:col-span-9 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Courses;