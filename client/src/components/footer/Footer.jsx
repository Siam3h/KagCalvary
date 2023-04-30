import "./footer.css";

function Footer() {
  return (
    <div className="footer">
     <div className="footerNavBar">
        <ul className="footerNavBarList">
        <li className="footerNavBarListItem"><a href="/">Home</a> <span>/</span></li>
          <li className="footerNavBarListItem"><a href="/about">About</a> <span>/</span></li>
          <li className="footerNavBarListItem"><a href="/sermons">Sermons</a> <span>/</span></li>
          <li className="footerNavBarListItem"><a href="/contact">Contact</a> <span>/</span></li>
          <li className="footerNavBarListItem"><a href="/live">Watch Live</a> <span>/</span></li>
          <li className="footerNavBarListItem"><a href="/blog">Blog</a></li>
        </ul>
      </div>
    <div className="footerDetails">
      <div className="footerContact">
        <span>KAG Church,Kimalat</span>
        <span>51 Namanga Road,Kimalat</span>
      </div>
      <div className="footerSocials">
      <h3>Stay Connected</h3>
      <ul className="topBarList">
        <li className="topBarListItem"> <i className="topBarRightItem" class="fa-brands fa-facebook"></i></li>
          <li className="topBarListItem"><i className="topBarRightItem" class="fa-brands fa-twitter"></i></li>
          <li className="topBarListItem"><i className="topBarRightItem" class="fa-brands fa-youtube"></i></li>
          <li className="topBarListItem"><i className="topBarRightItem" class="fa-brands fa-instagram"></i></li>
      </ul>
      </div>
    </div> 
    <span className="copyright">2023 &copy; KAG Church,Kimalat</span>
    </div>
)};

export default Footer;