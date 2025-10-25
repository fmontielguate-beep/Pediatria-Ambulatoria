
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface User {
  name: string;
  lastName: string;
  colegiado: string;
}

export type QuizMode = 'normal' | 'test';

export interface Score extends User {
  score: number;
  date: string;
}

export interface AnswerState {
  questionId: number;
  answerIndex: number | null;
  status: 'unanswered' | 'answered' | 'marked';
}
