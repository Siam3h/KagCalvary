import "./topbar.css";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <header className="headerNavBar">
      <a href="/" className="logo"><h4>KAG</h4></a>
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
      <nav className="nav">
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a> </li>
          <li><a href="/sermons">Sermons</a></li>
          <li><a href="/live">Watch Live</a></li>
          <li><a href="/donations">Giving</a></li>
          {user ? (
            <Link to="/settings">
              <img className="topImg" src={PF+user.profilePic} alt="" />
            </Link>) :
            (<li><a href="/login">{user && "Log In"}</a></li>,
              <li><a href="/l" onClick={handleLogOut}>{user && "Log Out"}</a></li>
            )
          }
        </ul>
      </nav>
    </header>
  );
}

export default TopBar;

