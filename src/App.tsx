import { useEffect, useState } from "react";
import Card from "./Card/Card";
import { ICard } from "./Card/Card.interface";
import { fetchPosts } from "./services/post";
import "./App.styles.scss";

function App() {
  const [posts, setPosts] = useState<Array<ICard>>([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <main>
      <section id="main-section">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-4 u-equal-height">
              <Card {...post} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
