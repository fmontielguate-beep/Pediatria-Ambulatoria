import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Question, AnswerState, QuizMode } from '../types';
import { formatTime } from '../utils/helpers';

interface QuizProps {
  questions: Question[];
  onQuizEnd: (score: number) => void;
  quizMode: QuizMode;
  onRestart: () => void;
  onExit: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onQuizEnd, quizMode, onRestart, onExit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>(() => 
    questions.map(q => ({ questionId: q.id, answerIndex: null, status: 'unanswered' }))
  );

  const totalTime = useMemo(() => questions.length * 90, [questions.length]);
  const [timeLeft, setTimeLeft] = useState(totalTime);

  const finishQuiz = useCallback(() => {
    let correctAnswers = 0;
    answers.forEach((ans, index) => {
      const question = questions.find(q => q.id === ans.questionId);
      if (question && ans.answerIndex !== null && question.correctAnswer === ans.answerIndex) {
        correctAnswers++;
      }
    });
    const score = (correctAnswers / questions.length) * 100;
    onQuizEnd(Math.round(score));
  }, [answers, questions, onQuizEnd]);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      finishQuiz();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, finishQuiz]);

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      ...newAnswers[currentQuestionIndex],
      answerIndex: optionIndex,
      status: 'answered',
    };
    setAnswers(newAnswers);
  };

  const handleMarkForLater = () => {
    const newAnswers = [...answers];
    const currentStatus = newAnswers[currentQuestionIndex].status;
    newAnswers[currentQuestionIndex] = {
      ...newAnswers[currentQuestionIndex],
      status: currentStatus === 'marked' ? (newAnswers[currentQuestionIndex].answerIndex === null ? 'unanswered' : 'answered') : 'marked',
    };
    setAnswers(newAnswers);
  };

  const goToQuestion = (index: number) => {
      if(index >= 0 && index < questions.length) {
          setCurrentQuestionIndex(index);
      }
  }

  const handleFastForward = () => {
    setTimeLeft(prev => Math.max(0, prev - 300)); // Adelanta 5 minutos
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswerState = answers[currentQuestionIndex];

  const getStatusColor = (status: AnswerState['status']) => {
    switch(status) {
        case 'answered': return 'bg-green-600 hover:bg-green-500';
        case 'marked': return 'bg-yellow-500 hover:bg-yellow-400';
        case 'unanswered': return 'bg-blue-600 hover:bg-blue-500';
    }
  }

  return (
    <div className="bg-blue-800 p-4 sm:p-8 rounded-lg shadow-2xl w-full">
      
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-xl font-bold text-blue-100">Pregunta {currentQuestionIndex + 1} de {questions.length}</h2>
        {quizMode === 'test' && (
          <div className="flex gap-2 flex-wrap justify-end order-3 sm:order-2">
            <button onClick={onExit} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">Volver al Inicio</button>
            <button onClick={onRestart} className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">Reiniciar</button>
            <button onClick={handleFastForward} className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">Adelantar Tiempo</button>
          </div>
        )}
        <div className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-2xl order-2 sm:order-3">
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        
        {/* Main Quiz Area (Left Column on Desktop) */}
        <main className="w-full lg:flex-grow">
            <div className="w-full bg-blue-700 rounded-full h-2.5 mb-6">
                <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
            </div>

            {/* Question */}
            <div className="bg-blue-900 p-6 rounded-lg mb-6">
            <p className="text-lg text-blue-100">{currentQuestion.question}</p>
            </div>

            {/* Options */}
            <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
                <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors duration-200 border-2 border-transparent
                    ${currentAnswerState.answerIndex === index 
                    ? 'bg-cyan-500 border-cyan-300 text-white font-bold' 
                    : 'bg-blue-700 hover:bg-blue-600 text-blue-100'}
                `}
                >
                {option}
                </button>
            ))}
            </div>

            {/* Controls */}
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
                onClick={handleMarkForLater}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-200
                ${currentAnswerState.status === 'marked' ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-blue-600 hover:bg-blue-500 text-blue-100'}
                `}
            >
                {currentAnswerState.status === 'marked' ? 'Desmarcar' : 'Marcar para después'}
            </button>
            <div className="flex gap-4">
                <button
                onClick={() => goToQuestion(currentQuestionIndex - 1)}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-2 bg-blue-500 rounded-lg font-semibold hover:bg-blue-400 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                Anterior
                </button>
                {currentQuestionIndex === questions.length - 1 ? (
                    <button onClick={finishQuiz} className="px-6 py-2 bg-green-500 rounded-lg font-semibold hover:bg-green-600">
                        Finalizar
                    </button>
                ) : (
                    <button
                    onClick={() => goToQuestion(currentQuestionIndex + 1)}
                    className="px-6 py-2 bg-blue-500 rounded-lg font-semibold hover:bg-blue-400"
                    >
                    Siguiente
                    </button>
                )}
            </div>
            </div>
        </main>
        
        {/* Question Navigation (Right Column on Desktop) */}
        <aside className="w-full lg:w-1/4 lg:max-w-xs">
            <div className="lg:sticky top-8">
                <div className="bg-blue-900 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-blue-200">Preguntas</h3>
                    <div className="grid grid-cols-10 gap-0.5">
                        {answers.map((ans, index) => (
                            <button 
                                key={ans.questionId}
                                onClick={() => goToQuestion(index)}
                                className={`w-full aspect-square rounded-md flex items-center justify-center font-bold text-white transition-all duration-200 text-[10px]
                                    ${getStatusColor(ans.status)}
                                    ${index === currentQuestionIndex ? 'ring-2 ring-offset-2 ring-offset-blue-900 ring-cyan-400' : ''}
                                `}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </aside>

      </div>
    </div>
  );
};

export default Quiz;