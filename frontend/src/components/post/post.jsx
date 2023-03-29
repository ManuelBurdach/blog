import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.link} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.text}</p>
    </div>
  );
};

export default Post;
