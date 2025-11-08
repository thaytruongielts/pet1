
import React from 'react';
import type { Person, Course } from '../types';

interface PersonCardProps {
  person: Person;
  courses: Course[];
  selectedAnswer?: string;
  onSelectAnswer: (personId: number, courseId: string) => void;
  showResults: boolean;
  isCorrect?: boolean;
  correctAnswer: string;
}

const CorrectIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const IncorrectIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
);


const PersonCard: React.FC<PersonCardProps> = ({
  person,
  courses,
  selectedAnswer,
  onSelectAnswer,
  showResults,
  isCorrect,
  correctAnswer,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <div className="flex items-center space-x-4">
        <span className="flex-shrink-0 w-10 h-10 bg-slate-200 text-slate-700 flex items-center justify-center rounded-full text-lg font-bold">
          {person.id}
        </span>
        <p className="text-slate-600 leading-relaxed"><strong className="text-slate-900">{person.name}:</strong> {person.description}</p>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-slate-500 mb-3">Choose the most suitable course:</p>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {courses.map((course) => {
            const isSelected = selectedAnswer === course.id;
            const isTheCorrectAnswer = correctAnswer === course.id;
            
            let buttonClass = "w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

            if (showResults) {
              if (isSelected) {
                if (isCorrect) {
                  buttonClass += " bg-green-500 border-green-600 text-white";
                } else {
                  buttonClass += " bg-red-500 border-red-600 text-white";
                }
              } else if (isTheCorrectAnswer) {
                 buttonClass += " border-green-500 bg-green-100 text-green-700";
              } else {
                buttonClass += " bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed";
              }
            } else {
               if (isSelected) {
                 buttonClass += " bg-indigo-600 border-indigo-700 text-white shadow-md";
               } else {
                 buttonClass += " bg-white border-slate-300 text-slate-700 hover:bg-slate-100";
               }
            }
            
            return (
              <button
                key={course.id}
                onClick={() => onSelectAnswer(person.id, course.id)}
                disabled={showResults}
                className={buttonClass}
              >
                {course.id}
              </button>
            );
          })}
        </div>
      </div>
       {showResults && (
        <div className="mt-4 p-3 rounded-lg flex items-center text-md font-semibold">
          {isCorrect ? (
            <div className="text-green-600 flex items-center">
              <CorrectIcon />
              <span>Correct! The answer is {correctAnswer}.</span>
            </div>
          ) : (
            <div className="text-red-600 flex items-center">
               <IncorrectIcon />
              <span>Incorrect. The correct answer is {correctAnswer}.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonCard;
