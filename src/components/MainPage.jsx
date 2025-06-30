import React, { useState } from 'react';
import { TodoLayout } from './ToDoLayout';
import { TodoHeader } from './TodoHeader';
import { ErrorMessage } from './ErrorMessage';
import { LoadingSpinner } from './LoadingSpinner';
import { AddTodoButton } from './AddTodoButton';
import { TodoForm } from './ToDoForm';
import { TodoList } from './TodoList';
import { TodoStats } from './TodoStats';
import { useTodos } from '../hooks/Usetodos';

export default function TodoPage() {
  const { 
    todos, 
    loading, 
    error, 
    addTodo, 
    updateTodo, 
    deleteTodo, 
    toggleTodoComplete 
  } = useTodos();

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('Logging out...');
  };

  const handleAddTodo = async () => {
    if (!formData.title.trim()) return;

    try {
      await addTodo(formData);
      setFormData({ title: '', description: '' });
      setShowAddForm(false);
    } catch (err) {
      // Error is handled by the hook
    }
  };

  const handleUpdateTodo = async () => {
    if (!formData.title.trim() || !editingTodo) return;

    try {
      await updateTodo(editingTodo.id, { ...formData, completed: editingTodo.completed });
      setEditingTodo(null);
      setFormData({ title: '', description: '' });
    } catch (err) {
      // Error is handled by the hook
    }
  };

  const handleDeleteTodo = async (id) => {
    if (!confirm('Are you sure you want to delete this todo?')) return;
    await deleteTodo(id);
  };

  const startEdit = (todo) => {
    setEditingTodo(todo);
    setFormData({ title: todo.title, description: todo.description || '' });
    setShowAddForm(false);
  };

  const cancelEdit = () => {
    setEditingTodo(null);
    setFormData({ title: '', description: '' });
  };

  const handleShowAddForm = () => {
    setShowAddForm(!showAddForm);
    setEditingTodo(null);
    setFormData({ title: '', description: '' });
  };

  const handleCancelForm = () => {
    setShowAddForm(false);
    cancelEdit();
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <TodoLayout>
      <TodoHeader onLogout={handleLogout} />
      <ErrorMessage error={error} />
      <AddTodoButton onClick={handleShowAddForm} />
      <TodoForm
        isVisible={showAddForm || editingTodo}
        isEditing={!!editingTodo}
        formData={formData}
        onFormDataChange={setFormData}
        onSubmit={editingTodo ? handleUpdateTodo : handleAddTodo}
        onCancel={handleCancelForm}
      />
      <TodoList
        todos={todos}
        onToggleComplete={toggleTodoComplete}
        onEdit={startEdit}
        onDelete={handleDeleteTodo}
      />
      <TodoStats todos={todos} />
    </TodoLayout>
  );
}