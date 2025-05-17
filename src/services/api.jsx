// src/api.js
import axios from 'axios';
import { getPostById } from '../api';
const api = axios.create({ baseURL: '/api' });

// Posts
export const fetchPosts       = () => api.get('/posts');
export const createPost       = data => api.post('/posts', data);
export const updatePost       = (id, data) => api.put(`/posts/${id}`, data);
export const deletePost       = id => api.delete(`/posts/${id}`);

// Categories
export const fetchCategories  = () => api.get('/categories');
export const createCategory   = data => api.post('/categories', data);
export const updateCategory   = (id, data) => api.put(`/categories/${id}`, data);
export const deleteCategory   = id => api.delete(`/categories/${id}`);

// Comments
export const fetchComments    = postId => api.get(postId ? `/posts/${postId}/comments` : '/comments');
export const createComment    = (postId, data) => api.post(`/posts/${postId}/comments`, data);
export const deleteComment    = (postId, commentId) => api.delete(`/posts/${postId}/comments/${commentId}`);
