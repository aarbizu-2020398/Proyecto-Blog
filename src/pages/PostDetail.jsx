import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPublicationById } from '../services/api.jsx';
import { useComments } from '../shared/hooks/useComments.jsx';
import CommentList from '../components/CommentList.jsx';
import CommentForm from '../components/CommentForm.jsx';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { comments, submitComment } = useComments(id);

  useEffect(() => {
    getPublicationById(id).then(res => setPost(res.data.publication));
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div className="post-detail">
      {/* ↩️ Botón para volver al menú principal */}
      <button
        onClick={() => navigate('/')}
        className="back-button"
      >
        ← Volver al inicio
      </button>

      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <small>{new Date(post.date).toLocaleString()}</small>

      <CommentForm onSubmit={submitComment} />
      <CommentList comments={comments} />
    </div>
  );
}