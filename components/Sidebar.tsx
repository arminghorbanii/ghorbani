import React from 'react';
import { Chapter, UserProgress } from '../types';

interface SidebarProps {
  curriculum: Chapter[];
  progress: UserProgress;
  onSelectLesson: (lessonId: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ curriculum, progress, onSelectLesson, isOpen, onCloseMobile }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed top-0 right-0 z-30 h-full w-64 bg-white border-l border-gray-200 transform transition-transform duration-300 ease-in-out overflow-y-auto
        lg:translate-x-0 lg:static lg:h-screen
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-python-blue flex items-center gap-2">
            <span className="text-python-yellow text-3xl">🐍</span>
            آرمین
          </h1>
          <button onClick={onCloseMobile} className="lg:hidden text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-6">
          {curriculum.map((chapter) => (
            <div key={chapter.id}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                {chapter.title}
              </h3>
              <ul className="space-y-1">
                {chapter.lessons.map((lesson) => {
                  const isCompleted = progress.completedLessonIds.includes(lesson.id);
                  const isActive = progress.currentLessonId === lesson.id;

                  return (
                    <li key={lesson.id}>
                      <button
                        onClick={() => {
                          onSelectLesson(lesson.id);
                          onCloseMobile();
                        }}
                        className={`
                          w-full text-right px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group
                          ${isActive 
                            ? 'bg-python-blue/10 text-python-blue' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                        `}
                      >
                        <span className="truncate">{lesson.title}</span>
                        {isCompleted && (
                          <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;