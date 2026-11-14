
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <div className="app">
      <Header />

      <main className="main" id="posts">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
