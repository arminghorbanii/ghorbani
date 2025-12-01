import React from 'react';
import { Lesson, Section, CodeSnippet } from '../types';

interface LessonContentProps {
  lesson: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
}

const CodeBlock: React.FC<{ data: CodeSnippet }> = ({ data }) => (
  <div className="my-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm" dir="ltr">
    <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b border-gray-200">
      <span className="text-xs font-mono text-gray-500 uppercase">{data.language}</span>
      <div className="flex gap-1">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
      </div>
    </div>
    <div className="bg-[#282c34] p-4 overflow-x-auto">
      <pre className="text-sm font-mono text-gray-300 leading-relaxed whitespace-pre">
        <code>{data.code}</code>
      </pre>
    </div>
    {data.output && (
      <div className="bg-gray-900 border-t border-gray-700 p-3">
        <div className="text-xs text-gray-500 mb-1">خروجی:</div>
        <pre className="text-sm font-mono text-emerald-400">{data.output}</pre>
      </div>
    )}
  </div>
);

const LessonContent: React.FC<LessonContentProps> = ({ lesson, onComplete, isCompleted }) => {
  const renderSection = (section: Section, index: number) => {
    switch (section.type) {
      case 'text':
        return (
          <p key={index} className="mb-4 text-gray-700 leading-8 text-lg">
            {section.content as string}
          </p>
        );
      case 'code':
        return <CodeBlock key={index} data={section.content as CodeSnippet} />;
      case 'note':
        return (
          <div key={index} className="my-6 bg-blue-50 border-r-4 border-python-blue p-4 rounded-l-md">
            <div className="flex items-start">
              <span className="text-2xl ml-3">💡</span>
              <p className="text-gray-700 leading-7">{section.content as string}</p>
            </div>
          </div>
        );
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside mb-6 space-y-2 text-gray-700 pr-4">
            {(section.content as string[]).map((item, i) => (
              <li key={i} className="leading-7">{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pb-32">
      <header className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{lesson.title}</h1>
        <p className="text-lg text-gray-500">{lesson.description}</p>
      </header>

      <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
        {lesson.content.map((section, idx) => renderSection(section, idx))}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onComplete}
          disabled={isCompleted}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1
            ${isCompleted 
              ? 'bg-emerald-100 text-emerald-700 cursor-default shadow-none translate-y-0' 
              : 'bg-python-blue text-white hover:bg-sky-700 shadow-sky-200'}
          `}
        >
          {isCompleted ? (
            <>
              <span>تکمیل شد</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </>
          ) : (
            <>
              <span>تکمیل درس</span>
              <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default LessonContent;