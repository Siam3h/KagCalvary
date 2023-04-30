import "./header.css";
import Video from "../../assets/video/videoBG.mp4";
import TopBar from "../../components/topbar/TopBar";


function Header() {
  return (
    <>
      <div className="header">
        <div className="headerVideo">
          <TopBar />
          <h1>
            Join us this coming Sunday for an <br />amazing experience and joy in <br />Jesus Christ
          </h1>
          <blockquote className="headerVideoQuote">
            <h2>Daily Verse</h2>
            <p>&ldquo;And we have known and believed the love that God hath to us.</p>
            <p> God is love; and he that dwelleth in love dwelleth in God, and God in him.&rdquo;</p>
            <span>1 John 4:16</span>
          </blockquote>
          <video autoPlay muted loop src={Video} type="video/mp4"></video>
        </div>
        <div className="headerQuoteA">
          <h2>Announcement</h2>
          <p>&ldquo;And we have known and believed the love that God hath to us.</p>
          <p> God is love; and he that dwelleth in love dwelleth in God, and God in him.&rdquo;</p>
          <span>1 John 4:16</span>
        </div>
        <div className="headerDesc">
          <h2>TWO COMMANDS</h2>
          <span>We actively adhere to the two commands the Lord Jesus left His disciples before returning to Heaven:</span>
        </div>
        <div className="headerCommands">
          <div className="headerBread">
            <h2>BREAKING OF BREAD</h2>
            <span>
              In the Upper room,on the night Jesus was betrayed,after breaking bread and taking a cup of wine,
              He commanded the disciples, "this do in remembrance of me."<span> (Luke 22, 1st Corinthians 11)</span>
              So,following the pattern of the disciples and the early church,(Acts 2:42, Acts 20:7), we break
              bread on the first day of the week as the climax of our morning worship.We do this "till He comes".
            </span>
          </div>
          <div className="headerBaptism">
            <h2>BELIEVER'S BAPTISM</h2>
            <span>
              In keeping with the Lord's command(Mathew 28:18-20) and following the Lord's example(Mathew 3:13-17)we
              believe that all born again Christians, upon profession of faith in Christ as their saviour,should
              be baptised by immersion.This was the practice of the early church (Acts 2:41, 8:12) as a public
              demonstration of a personal transformation.
            </span>
          </div>
        </div>
        <div className="headerChrchTimes">
          <h3>AS A CHURCH, WE MEET TOGETHER ON <br />SUNDAYS AT 9:30AM</h3>
          <span>We run a sunday school or rather a children's church during the morning service</span>
        </div>
      </div>
    </>
  )
};

export default Header;
