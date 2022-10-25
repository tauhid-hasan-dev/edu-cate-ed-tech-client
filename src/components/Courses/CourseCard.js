import React from 'react';

const CourseCard = ({ course }) => {
    const { title, id, total_student } = course;
    return (
        <div>
            <p>{course.title}</p>
        </div>
    );
};

export default CourseCard;