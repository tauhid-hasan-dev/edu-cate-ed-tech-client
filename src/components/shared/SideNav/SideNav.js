import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseList from './CourseList';

const SideNav = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, [])
    return (
        <div className='flex gap-3 flex-col'>
            {
                courseData.map((course, idx) => <CourseList key={idx} course={course}></CourseList>)
            }
        </div>
    );
};

export default SideNav;