

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/comments.css'; 

function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`/api/comments/${postId}`)
            .then((response) => setComments(response.data.comments))
            .catch((error) => setError('Error fetching comments'));
    }, [postId]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        axios.post('/api/comments', { postId, content: newComment }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            setComments((prevComments) => [...prevComments, response.data.comment]);
            setNewComment('');
        })
        .catch((error) => setError('Error submitting comment'));
    };

    return (
        <div>
            <h3>Comments</h3>
            {error && <p>{error}</p>}
            <div>
                {comments.map((comment) => (
                    <div key={comment._id}>
                        <p>{comment.author}: {comment.content}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

export default Comments;
