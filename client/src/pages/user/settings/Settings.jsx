import "./settings.css";
import TopBar from '../../../components/topbar/TopBar';
import Footer from '../../../components/footer/Footer';
import { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import Axios from "axios";


function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updateSucess, setUpdateSucess] = useState("");
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"


  const handleSubmit = (async e => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" })
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", filename);
      updatedUser.profilePic = filename;
      try {
        await Axios.post("/upload", data)
      } catch (err) {

      }
    }
    try {
      const res = await Axios.post("/users", + user._id, updatedUser);
      setUpdateSucess(true);
      dispatch({ type: "UPDATE_SUCESS", payload: res.data })
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" })
    }
  })
  return (
    <>
      <div className="about-navigation">
        <TopBar />
      </div>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
              <label htmlFor="fileInput">
                <i user-circle icon className="settingsPPIcon">user</i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
            </div>
            <label>Username</label>
            <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)} />
            <label>Email</label>
            <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
            <label onChange={e => setPassword(e.target.value)}>Password</label>
            <input type="password" placeholder="Your Password" />
            <button className="settingsSubmit" type="submit" >Update</button>
            {updateSucess && <span>Profile has been updated</span>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Settings;