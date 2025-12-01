import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LessonContent from './components/LessonContent';
import ChatBot from './components/ChatBot';
import { CURRICULUM } from './constants';
import { UserProgress, Lesson } from './types';

const STORAGE_KEY = 'armin-python-progress';

const App: React.FC = () => {
  // --- State ---
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progress, setProgress] = useState<UserProgress>({
    completedLessonIds: [],
    currentLessonId: CURRICULUM[0].lessons[0].id
  });

  // --- Effects ---
  useEffect(() => {
    // Load progress from local storage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  useEffect(() => {
    // Save progress
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // --- Logic ---
  const findLesson = (id: string): Lesson | undefined => {
    for (const chapter of CURRICULUM) {
      const found = chapter.lessons.find(l => l.id === id);
      if (found) return found;
    }
    return undefined;
  };

  const handleSelectLesson = (id: string) => {
    setProgress(prev => ({ ...prev, currentLessonId: id }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteLesson = () => {
    const currentId = progress.currentLessonId;
    
    // Mark as complete
    if (!progress.completedLessonIds.includes(currentId)) {
      setProgress(prev => ({
        ...prev,
        completedLessonIds: [...prev.completedLessonIds, currentId]
      }));
    }

    // Find next lesson
    let foundCurrent = false;
    let nextLessonId: string | null = null;

    for (const chapter of CURRICULUM) {
      for (const lesson of chapter.lessons) {
        if (foundCurrent) {
          nextLessonId = lesson.id;
          break;
        }
        if (lesson.id === currentId) {
          foundCurrent = true;
        }
      }
      if (nextLessonId) break;
    }

    // Advance if next exists
    if (nextLessonId) {
      setTimeout(() => {
        handleSelectLesson(nextLessonId!);
      }, 500); // Small delay for visual feedback
    } else {
      alert("تبریک! شما تمام دروس موجود را تکمیل کردید.");
    }
  };

  const currentLesson = findLesson(progress.currentLessonId);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 p-4 sticky top-0 z-10 flex items-center justify-between">
        <h1 className="text-xl font-bold text-python-blue flex items-center gap-2">
          <span className="text-2xl">🐍</span>
          آرمین
        </h1>
        <button 
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Sidebar Navigation */}
      <Sidebar 
        curriculum={CURRICULUM}
        progress={progress}
        onSelectLesson={handleSelectLesson}
        isOpen={sidebarOpen}
        onCloseMobile={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 transition-all duration-300">
        {currentLesson ? (
          <LessonContent 
            lesson={currentLesson}
            onComplete={handleCompleteLesson}
            isCompleted={progress.completedLessonIds.includes(currentLesson.id)}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            درسی یافت نشد.
          </div>
        )}
      </main>

      {/* AI Assistant */}
      <ChatBot />

    </div>
  );
};

export default App;