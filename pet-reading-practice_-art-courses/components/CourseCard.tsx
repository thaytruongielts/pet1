
import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
        {course.id}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>
        <p className="mt-2 text-slate-600 leading-relaxed">{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
