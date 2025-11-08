
import React, { useState, useMemo } from 'react';
import PersonCard from './components/PersonCard';
import CourseCard from './components/CourseCard';
import { PEOPLE, COURSES, CORRECT_ANSWERS } from './constants';
import type { Person } from './types';

const RefreshIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
  </svg>
);

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);


const App: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<{ [key: number]: boolean }>({});

  const handleSelectAnswer = (personId: number, courseId: string) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [personId]: courseId,
    }));
  };
  
  const allAnswered = useMemo(() => {
    return Object.keys(selectedAnswers).length === PEOPLE.length;
  }, [selectedAnswers]);

  const handleCheckAnswers = () => {
    if (!allAnswered) return;
    const newResults: { [key: number]: boolean } = {};
    PEOPLE.forEach(person => {
      newResults[person.id] = selectedAnswers[person.id] === CORRECT_ANSWERS[person.id];
    });
    setResults(newResults);
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setResults({});
  };

  const score = useMemo(() => {
    return Object.values(results).filter(Boolean).length;
  }, [results]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Art Courses – B1 English Reading Test</h1>
          <p className="mt-2 text-lg text-slate-600">Match the people with the most suitable art course.</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-700 border-b-2 border-indigo-200 pb-2">People</h2>
            {PEOPLE.map((person: Person) => (
              <PersonCard
                key={person.id}
                person={person}
                courses={COURSES}
                selectedAnswer={selectedAnswers[person.id]}
                onSelectAnswer={handleSelectAnswer}
                showResults={showResults}
                isCorrect={results[person.id]}
                correctAnswer={CORRECT_ANSWERS[person.id]}
              />
            ))}
          </div>

          <div className="space-y-6 lg:sticky lg:top-8">
            <h2 className="text-2xl font-semibold text-slate-700 border-b-2 border-indigo-200 pb-2">Art Courses</h2>
            <div className="space-y-6 max-h-[calc(100vh-10rem)] overflow-y-auto pr-2">
                {COURSES.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </div>
        </div>
        
        <footer className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t border-slate-200 p-4 mt-12 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 lg:-mx-8 lg:-mb-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {showResults && (
                 <div className="text-center sm:text-left">
                    <p className="text-xl font-bold text-slate-800">Your Score: {score} / {PEOPLE.length}</p>
                    <p className="text-slate-600">Review your answers above or try again.</p>
                 </div>
              )}
             {!showResults ? (
                <button
                    onClick={handleCheckAnswers}
                    disabled={!allAnswered}
                    className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg"
                >
                    <CheckIcon />
                    Check Answers
                </button>
             ) : (
                <button
                    onClick={handleReset}
                    className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-700 hover:bg-slate-800 transition-colors duration-200 shadow-lg"
                >
                    <RefreshIcon />
                    Try Again
                </button>
             )}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
