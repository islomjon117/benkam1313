import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // 🛠️ to'g'ri import

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar_main">
            <div className="logo_and_links">
              <div className="nav_logo">
                <Link to='/'>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>

              <div className="nav_links">
                <Link
                  to="/"
             
                >
                  home
                </Link>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  style={{ cursor: "pointer" }}
                >
                  about
                </ScrollLink>

                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  style={{ cursor: "pointer" }}
                >
                  services
                </ScrollLink>

                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  style={{ cursor: "pointer" }}
                >
                  projects
                </ScrollLink>
                <Link to="/">pages</Link>
                <Link to="/">contact</Link>
              </div>
            </div>

            <div className="nav_buttons_social_media">
              <div className="nav_button">
                <button>get free quote</button>
              </div>
              <div className="social_media">
                <div className="facebook">
                  <Link to="https://facebook.com">
                    <FaFacebook />
                  </Link>
                </div>
                <div className="twitter">
                  <Link to="https://twitter.com">
                    <FaXTwitter />
                  </Link>
                </div>
                <div className="instagram">
                  <Link to="https://instagram.com">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
