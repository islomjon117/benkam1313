import "../about/about.css";

import img2 from "../../assets/about_img/img2.png";
import img3 from "../../assets/about_img/img3.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <div className="about_main">
            <div className="about_left">
              <div className="about_title">
                <h2>ABOUT OUR COMPANY</h2>
              </div>
              <p>
                Thanks to our experience with European experts and an
                unconventional approach to work, each of our clients can count
                on technical assistance and support in profiles development.
              </p>
              <p>
                BENKAM website provides complete information and access to our
                production capacity, available aluminum alloys and machining and
                surface finishing options for aluminum profiles.
              </p>

              <div className="about_btn">
                <Link to="/about">
                  <button className="about_us_btn">About us</button>
                </Link>
              </div>
            </div>

            <div className="about_right">
              <div className="img_first">
                <img src={img2} alt="" />
              </div>

              <div className="img_second">
                <img src={img3} alt="" />
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
