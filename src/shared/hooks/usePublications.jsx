import { useState, useEffect } from 'react';
import { getPublications } from '../../services/api.jsx';

export const usePublications = (course) => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    getPublications(course).then(res => setPublications(res.data.publications));
  }, [course]);
  return publications;
};
