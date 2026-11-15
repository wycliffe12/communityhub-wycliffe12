
import PostCard from "./PostCard.jsx";

function PostList({ posts, onLike, onDelete }) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PostList;
