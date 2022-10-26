import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Courses/CourseCard';

const CourseContent = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 '>

            {
                courses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
            }

        </div>
    );
};

export default CourseContent;