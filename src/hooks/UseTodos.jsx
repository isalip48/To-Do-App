import { useState, useEffect } from 'react';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Simulated API calls (replace with actual API calls)
  const apiCall = async (endpoint, options = {}) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (endpoint === '/api/todos' && options.method === 'GET') {
      return [
        { id: 1, title: 'Complete project proposal', description: 'Finish the quarterly project proposal for the client meeting', completed: false },
        { id: 2, title: 'Review team performance', description: 'Conduct performance reviews for all team members', completed: true },
        { id: 3, title: 'Update documentation', description: 'Update the API documentation with new endpoints', completed: false }
      ];
    }
    
    if (options.method === 'POST') {
      return { id: Date.now(), ...JSON.parse(options.body), completed: false };
    }
    
    if (options.method === 'PUT') {
      return { id: parseInt(endpoint.split('/').pop()), ...JSON.parse(options.body) };
    }
    
    return {};
  };

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await apiCall('/api/todos', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setTodos(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData) => {
    try {
      const newTodo = await apiCall('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(todoData)
      });
      
      setTodos([newTodo, ...todos]);
      setError('');
      return newTodo;
    } catch (err) {
      setError('Failed to add todo');
      throw err;
    }
  };

  const updateTodo = async (id, todoData) => {
    try {
      const updatedTodo = await apiCall(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(todoData)
      });
      
      setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
      setError('');
      return updatedTodo;
    } catch (err) {
      setError('Failed to update todo');
      throw err;
    }
  };

  const deleteTodo = async (id) => {
    try {
      await apiCall(`/api/todos/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      
      setTodos(todos.filter(todo => todo.id !== id));
      setError('');
    } catch (err) {
      setError('Failed to delete todo');
      throw err;
    }
  };

  const toggleTodoComplete = async (todo) => {
    try {
      const updatedTodo = await updateTodo(todo.id, { ...todo, completed: !todo.completed });
      return updatedTodo;
    } catch (err) {
      setError('Failed to update todo');
      throw err;
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    error,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoComplete,
    refetch: fetchTodos
  };
};