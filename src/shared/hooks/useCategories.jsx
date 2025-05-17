import { useState, useEffect } from 'react';
import * as api from '../api';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState(null);

  const loadCategories = async () => {
    setLoading(true);
    try {
      const { data } = await api.fetchCategories();
      setCategories(data.categories || []);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(loadCategories, []);

  const addCategory = async cat => {
    const { data } = await api.createCategory(cat);
    setCategories(prev => [data.category, ...prev]);
  };

  const editCategory = async (id, updates) => {
    const { data } = await api.updateCategory(id, updates);
    setCategories(prev => prev.map(c => c._id === id ? data.category : c));
  };

  const removeCategory = async id => {
    await api.deleteCategory(id);
    setCategories(prev => prev.filter(c => c._id !== id));
  };

  return { categories, loading, error, addCategory, editCategory, removeCategory };
};