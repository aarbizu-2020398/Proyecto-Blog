import { useState } from 'react';

export default function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handle = async (e) => {
    e.preventDefault();
    if (!author || !content) return;
    const ok = await onSubmit({ author, content });
    if (ok) {
      setAuthor('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handle} className="comment-form">
      <input
        placeholder="Nombre"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Comentario"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}
