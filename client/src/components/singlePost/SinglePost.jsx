import { Link, useLocation } from "react-router-dom";
import axios, { Axios } from "axios";
import "./singlePost.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";


function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    getPost()
  }, [path]);

  const handleDelete = async () => {
    try {
      await Axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
      // window.location.replace("/");
      setUpdateMode(false);
    } catch (error) {

    }
  }

  const hanldeUpdate = async () => {
    try {
      await Axios.put(`/posts/${post._id}`, { username: user.username, title, description });
      window.location.reload();
    } catch (error) {

    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}{
          updateMode ? <input type="text" value={post.title} className="SinglePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} /> : (
            <h1 className="singlePostTitle">{title}
              {post.username === user?.username &&
                <div className="singlePostEdit">
                  <span className="singlePostIcon" onClick={() => setUpdateMode(true)}>edit</span>
                  <span className="singlePostIcon" onClick={handleDelete}>delete</span>
                </div>
              }
            </h1>
          )
        }
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (<textarea className="singlePostDescriptionInput" onChange={(e) => setDescription(e.target.value)} />) : (<p className="singlePostContent">{description}</p>)}
        {updateMode &&
          (<button className="singlePostButton" onClick={hanldeUpdate}>Update</button>)
        }
      </div>
    </div>
  );
}

export default SinglePost;
