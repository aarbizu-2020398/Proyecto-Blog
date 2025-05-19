export default function CommentList({ comments }) {
  return (
    <div className="comments">
      {comments.map(c => (
        <div key={c._id} className="comment">
          <strong>{c.author}</strong>
          <p>{c.content}</p>
          <small>{new Date(c.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
