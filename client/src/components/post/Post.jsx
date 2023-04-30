import "./post.css";
import { Link } from "react-router-dom"


function Post({ post }) {
  const PF = "localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo } alt="" />}
      <div className="postInfo">
        <div className="postCategorys">
          {post.categories.map((c) => (
            <span className="postCategory">{c.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postContent">{post.description}</p>
    </div>
  );
}

export default Post;
