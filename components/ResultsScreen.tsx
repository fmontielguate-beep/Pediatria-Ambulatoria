
import React from 'react';
import { User, QuizMode } from '../types';

interface ResultsScreenProps {
  score: number;
  user: User | null;
  onRestart: () => void;
  onRestartTest: () => void;
  quizMode: QuizMode;
}

declare global {
    interface Window {
        html2canvas: any;
    }
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, user, onRestart, quizMode, onRestartTest }) => {

  const handleGenerateImage = () => {
    const element = document.getElementById('results-capture');
    if (element && window.html2canvas) {
      window.html2canvas(element, { backgroundColor: '#1e3a8a' }).then((canvas: any) => {
        const link = document.createElement('a');
        link.download = `resultado-${user?.colegiado || 'test'}.jpeg`;
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
      });
    } else {
        alert("No se pudo generar la imagen.");
    }
  };

  const getResultMessage = () => {
      if (score >= 70) {
          return { message: "¡Excelente!", color: "text-green-400" };
      } else if (score >= 50) {
          return { message: "Buen trabajo", color: "text-yellow-400" };
      } else {
          return { message: "Necesita mejorar", color: "text-red-400" };
      }
  }

  const { message, color } = getResultMessage();

  return (
    <div className="bg-blue-800 p-8 rounded-lg shadow-2xl max-w-2xl mx-auto text-center flex flex-col items-center">
        <div id="results-capture" className="p-8 w-full">
            <h1 className="text-4xl font-bold mb-2 text-blue-100">Resultados del Examen Bimestral</h1>
            <p className="text-blue-200 mb-6">Felicidades, {user?.name} {user?.lastName}.</p>
            
            <div className="my-8">
                <p className={`text-6xl font-bold ${color}`}>{score}<span className="text-3xl text-blue-200">/100</span></p>
                <p className={`text-2xl mt-2 font-semibold ${color}`}>{message}</p>
            </div>
            
            <p className="text-blue-300">Número de Colegiado: {user?.colegiado}</p>
            <p className="text-blue-300 text-sm mt-2">Fecha: {new Date().toLocaleDateString()}</p>
        </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
        <button
          onClick={handleGenerateImage}
          className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-transform transform hover:scale-105"
        >
          Generar Imagen de la Nota
        </button>
        {quizMode === 'test' && (
            <button
                onClick={onRestartTest}
                className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
            >
                Reiniciar Examen de Prueba
            </button>
        )}
      </div>
    </div>
  );
};

export default ResultsScreen;