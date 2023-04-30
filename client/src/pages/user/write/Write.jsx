import "./write.css";
import { AiFillSetting } from "react-icons/ai";
import TopBar from '../../../components/topbar/TopBar';
import Footer from '../../../components/footer/Footer';
import { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import axios, { Axios } from "axios";

function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = (async e => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", filename);
      newPost.photo = filename;
      try {
        await Axios.post("/upload", data)
      } catch (err) {

      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data_.id)
    } catch (error) {

    }
  })

  return (
    <>
      <div className="about-navigation">
        <TopBar />
      </div>
      <div className="write">
        <img className="writeImg" src="" alt="" />
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i class="fa-solid fa-circle-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="writeFormGroup">
            <textarea placeholder="Write Here..." type="text" className="writeInput writeText"  onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <button className="writeSubmit" type="submit">Publish</button>
          <label htmlFor="fileInput">
            <a className="writeSettings" href="/settings"><AiFillSetting /></a>
          </label>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Write;
