import React from 'react';

export const TodoStats = ({ todos }) => {
  if (todos.length === 0) return null;

  const completedCount = todos.filter(t => t.completed).length;
  const pendingCount = todos.filter(t => !t.completed).length;

  return (
    <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-blue-400">{todos.length}</p>
          <p className="text-gray-400 text-sm">Total Tasks</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-400">{completedCount}</p>
          <p className="text-gray-400 text-sm">Completed</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-yellow-400">{pendingCount}</p>
          <p className="text-gray-400 text-sm">Pending</p>
        </div>
      </div>
    </div>
  );
};
