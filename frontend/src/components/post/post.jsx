import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  return (
    <Link to={"/post/" + post.id} className="post">
      <img src={"http://localhost:7777/" + post.link} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.text.slice(0, 60) + "..."}</p>
    </Link>
  );
};

export default Post;
