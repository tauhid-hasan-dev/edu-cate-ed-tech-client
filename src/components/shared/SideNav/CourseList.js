import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ course }) => {
    const { title, id } = course;
    return (
        <>
            <Link to={`/courses/${id}`}><div className='font-semibold px-2 py-3 bg-green-50 hover:bg-green-400 rounded cursor-pointer   border-green-600'>
                <p>{title}</p>
            </div></Link>

        </>

    );
};

export default CourseList;