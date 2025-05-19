import { useState } from 'react';
import { useCategories, usePublications } from '../../shared/hooks/index.js';
import PostCard from '../../components/PostCard.jsx';

export default function Dashboard() {
  const categories = useCategories();
  const [filter, setFilter] = useState('');
  const publications = usePublications(filter);

  return (
    <div className="dashboard">
      <nav className="filter-nav">
        <button onClick={() => setFilter('')}>Todos</button>
        {categories.map(c => (
          <button key={c._id} onClick={() => setFilter(c._id)}>
            {c.name}
          </button>
        ))}
      </nav>
      <div className="posts-grid">
        {publications.map(p => (
          <PostCard key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
