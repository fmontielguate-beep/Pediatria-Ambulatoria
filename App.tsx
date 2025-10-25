
import React, { useState, useMemo } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import ResultsScreen from './components/ResultsScreen';
import AdminScreen from './components/AdminScreen';
import { User, QuizMode, Question, Score } from './types';
import { questions } from './utils/quizData';
import { shuffleArray } from './utils/helpers';

const App: React.FC = () => {
  const [appState, setAppState] = useState<'start' | 'quiz' | 'results' | 'admin'>('start');
  const [user, setUser] = useState<User | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode>('normal');
  const [finalScore, setFinalScore] = useState<number>(0);
  const [quizKey, setQuizKey] = useState(0);

  const shuffledQuestions = useMemo(() => shuffleArray(questions), [quizKey]);

  const startQuiz = (user: User, mode: QuizMode) => {
    setUser(user);
    setQuizMode(mode);
    setQuizKey(prev => prev + 1); // Ensure questions are reshuffled for new quiz
    setAppState('quiz');
  };

  const showResults = (score: number) => {
    setFinalScore(score);
    if(quizMode === 'normal' && user) {
        const scores: Score[] = JSON.parse(localStorage.getItem('quizScores') || '[]');
        scores.push({ ...user, score, date: new Date().toLocaleString() });
        localStorage.setItem('quizScores', JSON.stringify(scores));
        
        const completed: string[] = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
        completed.push(user.colegiado);
        localStorage.setItem('completedQuizzes', JSON.stringify(completed));
    }
    setAppState('results');
  };
  
  const showAdmin = () => {
    setAppState('admin');
  };

  const restart = () => {
    setAppState('start');
    setUser(null);
  };

  const restartTest = () => {
     if (user && quizMode === 'test') {
        setQuizKey(prev => prev + 1);
        setAppState('quiz');
     }
  }

  const renderContent = () => {
    switch (appState) {
      case 'quiz':
        return <Quiz key={quizKey} questions={shuffledQuestions} onQuizEnd={showResults} quizMode={quizMode} onRestart={() => setQuizKey(k => k + 1)} onExit={restart} />;
      case 'results':
        return <ResultsScreen score={finalScore} user={user} onRestart={restart} quizMode={quizMode} onRestartTest={restartTest}/>;
      case 'admin':
          return <AdminScreen onBack={restart} />;
      case 'start':
      default:
        return <StartScreen onStart={startQuiz} onAdminLogin={showAdmin} />;
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
