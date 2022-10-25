import React, { useEffect, useState } from 'react';
import CourseList from './CourseList';

const SideNav = () => {

    const [courseData, setCourseData] = useState([]);
    console.log(courseData)

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, [])
    return (
        <div className='flex gap-3 flex-col'>
            {
                courseData.map(course => <CourseList key={course.id} course={course}></CourseList>)
            }
        </div>
    );
};

export default SideNav;