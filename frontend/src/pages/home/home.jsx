import { useEffect, useState } from "react";
import Post from "../../components/post/post";
import "./home.css";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch("http://localhost:7777/api/v1/posts/all")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="home">
      {posts?.map((post) => {
        return <Post key={uuidv4()} post={post} />;
      })}
    </section>
  );
};

export default Home;
