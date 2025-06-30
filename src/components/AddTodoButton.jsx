import React from 'react';

export const AddTodoButton = ({ onClick }) => {
  return (
    <div className="mb-8">
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
      >
        + Add New Todo
      </button>
    </div>
  );
};