
function PostCard({ post, onLike, onDelete }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>

      <div className="post-meta">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>

      <button type="button" onClick={() => onLike(post.id)}>
        <span aria-hidden="true">❤️</span>
        <span className="sr-only">Like post</span>
        {" "}{post.likes}
      </button>

      <button
        type="button"
        onClick={() => onDelete(post.id)}
        aria-label={`Delete post: ${post.title}`}
      >
        Delete
      </button>
    </article>
  );
}

export default PostCard;
