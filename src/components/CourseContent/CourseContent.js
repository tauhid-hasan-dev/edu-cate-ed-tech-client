import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Courses/CourseCard';

const CourseContent = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            {
                courses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
            }
        </div>
    );
};

export default CourseContent;