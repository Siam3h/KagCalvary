import React from 'react';
import './SermonsPage.css';
import TopBar from '../../components/topbar/TopBar';
import Footer from '../../components/footer/Footer';


const SermonsPage = (props) => {

  var style = {
    minHeight: "700px",
    minWidth: "100%",
    maxWidth: "100%",
    border: "1px solid #ddd",
    boxSizing: "border-box"
  }

  return (
    <>
      <div className="about-navigation">
        <TopBar />
      </div>
      <div className="sermons-page">
        <h1>Sermons</h1>
        <hr />
        <div>
          <iframe style={style} height="700" title="Sermons" src="https://embed.sermonaudio.com/browser/broadcaster/kagchurchkimalat/?sort=newest&page_size=25"></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SermonsPage;
