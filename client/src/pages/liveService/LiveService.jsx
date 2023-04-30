import "./liveService.css";
import Footer from "../../components/footer/Footer";
import TopBar from '../../components/topbar/TopBar';

const LiveService = () => {
    const style = {
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '56.25%'
    }

    const iFrameStyle = {
        position: 'absolute',
        left: 0,
        top: 0
    }

    const contents = (
        <div style={style}>
            <iframe
                title="Live"
                tabIndex="-1"
                width="100%"
                height="100%"
                src="https://embed.sermonaudio.com/player/l/kagchurchkimalat/?autoplay=true"
                style={iFrameStyle}
                allowFullScreen
                frameborder="0"
                scrolling="no"
                allow="autoplay">
            </iframe>
        </div>
    );

    /*const contents = (
       <div>
         <br/>
         <h3 class="text-center">Our services will not be broadcast live today. We are sorry for any inconvenience caused.</h3>
       </div>
     );*/

    return (
        <>
            <div className="live-page">
            <div className="about-navigation">
          <TopBar />
        </div>
                <h2>Watch Live</h2>
                <hr />
                {contents}
            </div>
            <Footer />
        </>
    )
}

export default LiveService