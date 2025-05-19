import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <small>{new Date(post.date).toLocaleDateString()}</small>
      <Link to={`/posts/${post._id}`}>Ver más</Link>
    </div>
  );
}
