import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ 
  todos, 
  onToggleComplete, 
  onEdit, 
  onDelete 
}) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2m-6 0V4a1 1 0 011-1h4a1 1 0 011 1v1m-6 0h6" />
          </svg>
        </div>
        <p className="text-gray-400 text-lg">No todos yet</p>
        <p className="text-gray-500 text-sm">Add your first todo to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};



