import React from 'react';

export const TodoHeader = ({ onLogout }) => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-blue-400 mb-2">My Todos</h1>
        <p className="text-gray-400">Manage your tasks efficiently</p>
      </div>
      <button
        onClick={onLogout}
        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 border border-white/10"
      >
        Logout
      </button>
    </header>
  );
};