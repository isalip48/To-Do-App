import React from 'react';

export const TodoForm = ({ 
  isVisible, 
  isEditing, 
  formData, 
  onFormDataChange, 
  onSubmit, 
  onCancel 
}) => {
  if (!isVisible) return null;

  const handleInputChange = (field, value) => {
    onFormDataChange({ ...formData, [field]: value });
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-blue-300">
        {isEditing ? 'Edit Todo' : 'Add New Todo'}
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Title *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Enter todo title..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
            rows="3"
            placeholder="Enter description (optional)..."
          />
        </div>
        <div className="flex space-x-3">
          <button
            onClick={onSubmit}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
          >
            {isEditing ? 'Update Todo' : 'Add Todo'}
          </button>
          <button
            onClick={onCancel}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};