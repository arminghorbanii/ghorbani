export interface CodeSnippet {
  language: 'python';
  code: string;
  output?: string;
}

export interface Section {
  type: 'text' | 'code' | 'note' | 'list';
  content: string | CodeSnippet | string[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: Section[];
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface UserProgress {
  completedLessonIds: string[];
  currentLessonId: string;
}