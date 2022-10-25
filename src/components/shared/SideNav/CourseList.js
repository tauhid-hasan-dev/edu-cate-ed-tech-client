import React from 'react';

const CourseList = ({ course }) => {
    const { title } = course;
    return (
        <div className='font-semibold px-2 py-3 bg-green-300 hover:bg-green-400 rounded cursor-pointer  '>
            <p>{title}</p>
        </div>
    );
};

export default CourseList;