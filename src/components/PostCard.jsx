
function PostCard({ post }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      <div className="post-meta">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>
    </article>
  );
}

export default PostCard;
