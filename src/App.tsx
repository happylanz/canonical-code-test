import { useEffect, useState } from "react";
import Card from "./Card/Card";
import { ICard } from "./Card/Card.interface";
import { fetchPosts } from "./services/post";
import "./App.styles.scss";

function App() {
  const [posts, setPosts] = useState<Array<ICard>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .then(() => setLoading(false));
  }, []);

  return (
    <main>
      <section id="main-section">
        {/* LOADER */}
        {loading && (
          <div className="u-align-text--center loader-container">
            <span className="u-sh3">
              FETCHING ARTICLES{" "}
              <i className="p-icon--spinner u-animation--spin" />
            </span>
          </div>
        )}

        {/* POSTS */}
        {!loading && (
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-4 u-equal-height">
                <Card {...post} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
