import { useState, useEffect } from "react";
import axios from "axios";
import "./blog.css";
import Footer from "../../components/footer/Footer";
import TopBar from '../../components/topbar/TopBar';
import Posts from "../../components/posts/Posts";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const { search } = useLocation();

  try {
    useEffect(() => {

      const fetchPosts = async () => {
        const res = await axios.get("http://localhost:5000/api/posts/" + search)
        setPosts(res.data)
      }
      fetchPosts()
    }, [search]);

  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <div className="about-navigation">
        <TopBar />
      </div>
      <h2 className="blogTitle">Our Blog</h2>
      <div className="blogPost">
        <Posts posts={posts} />

      </div>
      <Footer />
    </>
  )
}

export default Blog