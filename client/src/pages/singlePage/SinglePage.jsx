import "./singlePage.css";
import SinglePost from "../../components/singlePost/SinglePost";
import TopBar from '../../components/topbar/TopBar';
import Footer from '../../components/footer/Footer';


function SinglePage() {
  return (
    <>
      <div className="about-navigation">
        <TopBar />
      </div>
      <div className="single">
        <SinglePost />
      </div>
      <Footer />
    </>
  );
}

export default SinglePage;