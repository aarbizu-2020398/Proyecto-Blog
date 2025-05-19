import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/Blog'
});

export const getCategories = () =>
  API.get('/categories');

export const getPublications = (course) =>
  API.get('/publications', { params: course ? { course } : {} });

export const getPublicationById = (id) =>
  API.get(`/publications/${id}`);

export const getComments = (pubId) =>
  API.get(`/publications/${pubId}/comments`);

export const addComment = (pubId, data) =>
  API.post(`/publications/${pubId}/comments`, data);
