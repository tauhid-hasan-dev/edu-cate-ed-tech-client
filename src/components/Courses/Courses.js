import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../shared/SideNav/SideNav';

const Courses = () => {
    return (
        <div>
            <p>this is courses</p>
            <SideNav></SideNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;