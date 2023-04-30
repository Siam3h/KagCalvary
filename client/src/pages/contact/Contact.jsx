import './contact.css';
import TopBar from '../../components/topbar/TopBar';
import Footer from '../../components/footer/Footer';
import Location from '../../components/location/Location';


const Contact = (props) => {
  return (
    <>
      <div className="contact-page">
        <div className="about-navigation">
          <TopBar />
        </div>
        <h2>Contact Us</h2>
        <Location />
        <h4>You can also email us: </h4>
        <a href="mailto:secretary@treasurer@kagkimalata.com"><i className="far fa-envelope"></i> Email Us</a>
      </div>
      <Footer />
    </>
  )
}

export default Contact;
