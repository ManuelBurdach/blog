import { useEffect, useState } from "react";
import "./postDetail.css";
import { Link, useParams } from "react-router-dom";

const PostDetail = () => {
  const postId = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    fetch(`http://localhost:7777/api/v1/posts/${postId.id}`)
      .then((res) => res.json())
      .then((post) => {
        setPost(post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!post) return;

  return (
    <>
      <section className="postDetailImg">
        <img src={"http://localhost:7777/" + post.link} alt={post.title} />
      </section>
      <section className="postDetail">
        <div className="postDiv">
          <h2>
            {postId.id}. {post.title}
          </h2>
          <p>{post.text}</p>
          <Link to={"/"}>Zurück...</Link>
        </div>
      </section>
    </>
  );
};

export default PostDetail;
