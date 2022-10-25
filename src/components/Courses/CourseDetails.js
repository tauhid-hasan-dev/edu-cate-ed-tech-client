import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
    return (
        <div>
            <p>this is course details</p>
        </div>
    );
};

export default CourseDetails;