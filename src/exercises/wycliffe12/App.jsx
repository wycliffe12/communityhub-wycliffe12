
import Layout from "../../components/Layout.jsx";
import PostCard from "../../components/PostCard.jsx";
import Button from "../../components/Button.jsx";
import "./App.css";

const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "Components are just functions that return markup.",
    author: "Amina",
    date: "Jan 15, 2026"
  },
  {
    id: 2,
    title: "Why Flexbox Clicked For Me",
    content: "It stopped being magic once I understood the main axis.",
    author: "Brian",
    date: "Jan 14, 2026"
  },
  {
    id: 3,
    title: "My First Deployment",
    content: "Three clicks in GitHub Pages and it was live on the internet.",
    author: "Cynthia",
    date: "Jan 13, 2026"
  },
  {
    id: 4,
    title: "Learning React Props",
    content: "Props help us pass information between components.",
    author: "Wycliffe",
    date: "Jan 12, 2026"
  }
];

function App() {
  return (
    <Layout>
      <h2>Latest Posts</h2>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <div className="button-group">
        <Button text="Primary Button" />
        <Button text="Secondary Button" variant="secondary" />
        <Button text="Disabled Button" disabled={true} />
      </div>
    </Layout>
  );
}

export default App;
