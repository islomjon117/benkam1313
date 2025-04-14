import "../header/header.css";

import bg from "../../assets/header/header_bg.mp4";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header" id="home">
        <video autoPlay muted loop>
          <source src={bg} type="video/mp4" />
        </video>
        <div className="container">
          <div className="header_main">
            <div className="header_title">
              <h1>we build trust, we're Xtra factory</h1>
            </div>
            <div className="header_buttons">
              <button className="contact_btn">contact us</button>
              <Link to='https://akfagroup.com/benkam/'>
                <button className="wiev_360">360° view</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
