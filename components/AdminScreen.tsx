
import React, { useEffect, useState } from 'react';
import { Score } from '../types';

interface AdminScreenProps {
    onBack: () => void;
}

const AdminScreen: React.FC<AdminScreenProps> = ({ onBack }) => {
    const [scores, setScores] = useState<Score[]>([]);

    useEffect(() => {
        const storedScores: Score[] = JSON.parse(localStorage.getItem('quizScores') || '[]');
        storedScores.sort((a, b) => b.score - a.score);
        setScores(storedScores);
    }, []);

    return (
        <div className="bg-blue-800 p-8 rounded-lg shadow-2xl w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-blue-100">Panel de Administrador</h1>
                <button 
                    onClick={onBack}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Volver al Inicio
                </button>
            </div>

            {scores.length === 0 ? (
                <p className="text-center text-blue-300 py-10">Aún no hay resultados para mostrar.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead className="bg-blue-900 text-blue-200 uppercase text-sm">
                            <tr>
                                <th className="p-3">Nombre</th>
                                <th className="p-3">Apellido</th>
                                <th className="p-3">N° Colegiado</th>
                                <th className="p-3 text-right">Puntuación</th>
                                <th className="p-3">Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="text-blue-100">
                            {scores.map((score, index) => (
                                <tr key={index} className="border-b border-blue-700 hover:bg-blue-700/50">
                                    <td className="p-3">{score.name}</td>
                                    <td className="p-3">{score.lastName}</td>
                                    <td className="p-3">{score.colegiado}</td>
                                    <td className="p-3 font-bold text-right">{score.score}</td>
                                    <td className="p-3">{score.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminScreen;
