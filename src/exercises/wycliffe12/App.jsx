
import Layout from "../../components/Layout.jsx";
import PostList from "../../components/PostList.jsx";
import CreatePost from "../../components/CreatePost.jsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";
import Button from "../../components/shared/Button/Button.jsx";
import "./App.css";

const initialPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Components are just functions that return markup.",
    author: "Amina",
    date: "Jan 15, 2026",
    likes: 0,
  },
  {
    id: 2,
    title: "Why Flexbox Clicked For Me",
    excerpt: "It stopped being magic once I understood the main axis.",
    author: "Brian",
    date: "Jan 14, 2026",
    likes: 0,
  },
  {
    id: 3,
    title: "My First Deployment",
    excerpt: "Three clicks in GitHub Pages and it was live on the internet.",
    author: "Cynthia",
    date: "Jan 13, 2026",
    likes: 0,
  },
  {
    id: 4,
    title: "Learning React Props",
    excerpt: "Props help us pass information between components.",
    author: "Wycliffe",
    date: "Jan 12, 2026",
    likes: 0,
  },
];

function App() {
  const [posts, setPosts] = useLocalStorage(
    "communityhub-posts",
    initialPosts
  );

  const handleLike = (id) => {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  const handleAddPost = (newPost) => {
    const post = {
      id: Date.now(),
      title: newPost.title,
      excerpt: newPost.content,
      author: "You",
      date: new Date().toLocaleDateString(),
      likes: 0,
    };

    setPosts((previousPosts) => [post, ...previousPosts]);
  };

  const handleDelete = (id) => {
    setPosts((previousPosts) =>
      previousPosts.filter((post) => post.id !== id)
    );
  };

  return (
    <Layout>
      <h2>Latest Posts</h2>

      <CreatePost onAddPost={handleAddPost} />

      <PostList
        posts={posts}
        onLike={handleLike}
        onDelete={handleDelete}
      />

      <div className="button-group">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button disabled>Disabled Button</Button>
      </div>
    </Layout>
  );
}

export default App;
