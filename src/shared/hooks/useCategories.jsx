import { useState, useEffect } from 'react';
import { getCategories } from '../../services/api.jsx';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(res => setCategories(res.data.categories));
  }, []);
  return categories;
};
