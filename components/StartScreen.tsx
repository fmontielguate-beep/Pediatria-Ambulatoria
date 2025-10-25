
import React, { useState } from 'react';
import { User, QuizMode } from '../types';

interface StartScreenProps {
  onStart: (user: User, mode: QuizMode) => void;
  onAdminLogin: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, onAdminLogin }) => {
  const [user, setUser] = useState<User>({ name: '', lastName: '', colegiado: '' });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [view, setView] = useState<'main' | 'userForm' | 'passwordPrompt'>('main');
  const [promptType, setPromptType] = useState<'test' | 'admin' | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode>('normal');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleStart = () => {
    if (!user.name || !user.lastName || !user.colegiado) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (quizMode === 'normal') {
      const completedQuizzes: string[] = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
      if (completedQuizzes.includes(user.colegiado)) {
        setError('Este número de colegiado ya ha completado el cuestionario.');
        return;
      }
    }
    setError('');
    onStart(user, quizMode);
  };

  const handlePasswordSubmit = () => {
    if (promptType === 'test') {
      if (password === 'Helena2016') {
        setQuizMode('test');
        setView('userForm');
        setError('');
        setPassword('');
      } else {
        setError('Contraseña de prueba incorrecta.');
      }
    } else if (promptType === 'admin') {
      if (password === 'Miquel2021') {
        onAdminLogin();
      } else {
        setError('Contraseña de administrador incorrecta.');
      }
    }
  };
  
  const resetToMain = () => {
      setView('main');
      setError('');
      setPassword('');
      setUser({ name: '', lastName: '', colegiado: '' });
  }
  
  const renderBackButton = () => (
      <button onClick={resetToMain} className="w-full mt-2 bg-gray-600 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition-colors">
          Volver
      </button>
  );

  const renderContent = () => {
    switch (view) {
      case 'userForm':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-100">{quizMode === 'test' ? 'Modo de Prueba' : 'Registro de Participante'}</h2>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={user.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={user.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="colegiado"
              placeholder="Número de Colegiado"
              value={user.colegiado}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              onClick={handleStart}
              className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Iniciar Examen
            </button>
            {renderBackButton()}
          </div>
        );
      case 'passwordPrompt':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-100">{promptType === 'test' ? 'Acceso de Prueba' : 'Acceso de Administrador'}</h2>
            <p className="text-blue-200">Ingrese la contraseña para continuar.</p>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              className="w-full px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              onClick={handlePasswordSubmit}
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Acceder
            </button>
            {renderBackButton()}
          </div>
        );
      case 'main':
      default:
        return (
          <>
            <h1 className="text-4xl font-bold mb-4 text-blue-100">Examen Bimestral</h1>
            <p className="text-blue-200 mb-8">Bienvenido. Seleccione una opción para comenzar.</p>
            <div className="space-y-4">
              <button
                onClick={() => { setQuizMode('normal'); setView('userForm'); }}
                className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Iniciar Examen
              </button>
              <button
                onClick={() => { setPromptType('test'); setView('passwordPrompt'); }}
                className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
              >
                Modo de Prueba
              </button>
              <button
                onClick={() => { setPromptType('admin'); setView('passwordPrompt'); }}
                className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
              >
                Administrador
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-blue-800 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-center">
      {renderContent()}
    </div>
  );
};

export default StartScreen;