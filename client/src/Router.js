import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About"
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Donations from "./pages/donations/Donations";
import Sermons from "./pages/sermons/SermonsPage";
import LiveService from "./pages/liveService/LiveService";
import Register from "./pages/user/register/Register";
import LogIn from "./pages/user/logIn/LogIn";
import Write from "./pages/user/write/Write";
import Settings from "./pages/user/settings/Settings";
import SinglePage from "./pages/singlePage/SinglePage";

const router = createBrowserRouter([
    {path:"/", element: <Home />},
    {path:"/blog", element: <Blog />},
    {path:"/about", element: <About /> },
    {path:"/contact", element: <Contact /> },
    {path:"/donations", element: <Donations /> },
    {path:"/sermons", element: <Sermons /> },
    {path:"/live", element: <LiveService /> },
    {path:"/register", element: <Register /> },
    {path:"/login", element: <LogIn /> },
    {path:"/write", element: <Write /> },
    {path:"/settings", element: <Settings /> },
    {path:"/post/:id", element: <SinglePage /> },
])

export default router;