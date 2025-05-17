import React, { useState } from 'react';
import axios from 'axios';
import './styles/commentForm.css';

function CommentForm({ postId }) {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/comments', { postId, author, content })
            .then(response => {
                setAuthor('');
                setContent('');
                alert('Comentario agregado!');
            })
            .catch(error => console.error('Error al agregar comentario:', error));
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <input 
                type="text" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Tu nombre" 
                required 
            />
            <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Escribe tu comentario..." 
                required 
            />
            <button type="submit" className="btn add-comment-btn">Agregar Comentario</button>
        </form>
    );
}

export default CommentForm;
