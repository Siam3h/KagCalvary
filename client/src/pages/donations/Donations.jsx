import './donations.css';
import TopBar from '../../components/topbar/TopBar';
import Footer from '../../components/footer/Footer';

const Donations = () => {
  return (
    <>
      <div className='donations'>
        <div className="about-navigation">
          <TopBar />
        </div>
        <h2>Giving</h2>
        <div className="">
          <p>
            <strong>Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.</strong>
            <br />
            <span className="donations-bible-reference">2 Corinthians 9:7</span>
          </p>
          <p>A number of people have been asking about how they can continue to support the Lord’s work financially.</p>
          <p>You can give via a bank transfer: <strong>Name: KAG Kimalat Church,<br /> Account Number: 61041002</strong></p>
          <p>and also via M-Pesa:<br /> <strong>PayBill: 95-04-34, <br />Account Number: 61041002: <br />Name:KAG Kimalat Church</strong></p>
          <p>We encourage you to also give by Gift Aid, You can fill in the form online <a href="https://forms.gle/yaRkusVi7LDHJkdQ7" target="_blank" rel="noopener noreferrer">here</a>. Alternatively you can download the gift aid form at the bottom of this page. Please print, complete, scan and return to the treasurer via email.</p>
          <br />
          <a href="https://forms.gle/yaRkusVi7LDHJkdQ7" target="_blank" rel="noopener noreferrer">Gift Aid Form (Online)</a>
          <br />
          <a href="media/gift-aid.doc">Gift Aid Form (Word Document)</a>
          <br />
          <a href="media/gift-aid.pdf">Gift Aid Form (PDF)</a>
          <br />
          <br />
          <p>For other ways to give please contact our treasurer,(NAME), at <a href="mailto:treasurer@kagkimalata.com">treasurer@kagkimalata.com</a></p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Donations;