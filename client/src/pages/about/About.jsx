import "./about.css";
import TopBar from '../../components/topbar/TopBar';
import Footer from '../../components/footer/Footer';


const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-navigation">
          <TopBar />
        </div>
        <div>
          <h2>WELCOME</h2>
          <p>
            Kenya Assemblies of God Church, Kimalat is a relatively young church. We recently celebrated our 30th anniversary.
            <br />
            Our desire is to exalt the Name of our Saviour the Lord Jesus Christ.
          </p>
          <p className="bible-quote">
            &quot;And He is the head of the body, the church: who is the beginning, the firstborn from the dead; that in all
            things He might have the pre-eminence.&quot; <span className="about-bible-reference"> <br />Colossians. 1:18</span>
          </p>
          <p>
            We desire to see Christian’s grow; whilst for non-Christians, we desire for them to come to personal saving knowlege
            of the Lord Jesus Christ. Thus main focus in our meetings is the preaching of God’s Word.
          </p>
          <p className="bible-quote">
            &quot;Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and
            doctrine.&quot; <span className="about-bible-reference"> <br />2 Timothy 4:2</span>
          </p>
          <p>
            Children’s church (Sunday School) operate during our Sunday morning meeting.
            If you are visiting in the area or seeking a place to worship we heartily invite you to come along and enjoy the
            fellowship of God’s people. We assure you of a warm welcome at all times.
          </p>
        </div>
        <div className="about__details">
        <h2>Midweek Meetings</h2>
          <p class="about__details-description">
            <i class="ri-checkbox-fill about__details-icon"></i>
            Womens Meeting - Last Tuesday of each month at 8pm
          </p>
          <p class="about__details-description">
            <i class="ri-checkbox-fill about__details-icon"></i>
            Bible study and prayer meeting - Wednesday night at 8pm
          </p>
          <h2>Sunday Meetings</h2>
          <p class="about__details-description">
            <i class="ri-checkbox-fill about__details-icon"></i>
            Sunday school - 10.30am
          </p>
          <p class="about__details-description">
            <i class="ri-checkbox-fill about__details-icon"></i>
            Gospel service - Every other Sunday at 8:30pm.
          </p>
        </div>
        <div>
        <span className="nb">Both the morning and gospel services <br /> are preceded by times of prayer</span>
        <h2 className="about__detailsH">Midweek Meetings</h2>
          <table className="table">
            <tbody>
              <tr><td>Womens Meeting</td><td>Last Tuesday of each month at 8pm</td></tr>
              <tr><td>Searchers</td><td>Wednesday night at 6:45pm</td></tr>
              <tr><td>Bible study and prayer meeting</td><td>Wednesday night at 8pm</td></tr>
              <tr><td>Tiny Tots</td><td>Thursday at 10:30am (During term time). </td></tr>
            </tbody>
          </table>
          <br />

          <h2 className="about__detailsH">Sunday Meetings</h2>
          <table className="table">
            <tbody>
              <tr><td>Sunday school</td><td>10.30am. </td></tr>
              <tr><td>Morning meeting</td><td>11.30am</td></tr>
              <tr><td>Gospel service</td><td>6.30pm</td></tr>
              <tr><td>Youth fellowship</td><td>Every other Sunday at 8:30pm. </td></tr>
              <tr><td colSpan="2" className="nb">Both the morning and gospel services are preceded by times of prayer</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;