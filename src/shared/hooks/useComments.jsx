import { useState, useEffect } from 'react';
import { getComments, addComment } from '../../services/api.jsx';

export const useComments = (pubId) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (!pubId) return;
    getComments(pubId).then(res => setComments(res.data.comments));
  }, [pubId]);

  const submitComment = async (data) => {
    const res = await addComment(pubId, data);
    if (res.data.success) {
      setComments(prev => [res.data.comment, ...prev]);
      return true;
    }
    return false;
  };

  return { comments, submitComment };
};
