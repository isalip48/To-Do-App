import React from 'react';

export const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6">
      <p className="text-red-300">{error}</p>
    </div>
  );
};