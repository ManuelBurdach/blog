import { useEffect, useState } from "react";
import "./postDetail.css";
import { Link, useParams } from "react-router-dom";

const PostDetail = () => {
  const postId = useParams();
  const [post, setPost] = useState();
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:7777/api/v1/posts/${postId.id}`)
      .then((res) => res.json())
      .then((post) => {
        setPost(post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId.id]);

  const deletePost = () => {
    fetch(`http://localhost:7777/api/v1/deletePost/${postId.id}`, {
      method: "DELETE",
    }).then();
  };

  if (!post) return;

  return (
    <>
      <section className="postDetailImg">
        <img src={"http://localhost:7777/" + post.link} alt={post.title} />
      </section>
      <section className="postDetail">
        <div className="postDiv">
          <Link
            onClick={() => {
              deletePost(post.id);
            }}
            to={"/"}
          >
            Delete Post
          </Link>
          <Link
            onClick={() => {
              setEdit(!edit);
            }}
          >
            Edit
          </Link>

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
