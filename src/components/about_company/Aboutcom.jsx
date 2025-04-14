import { useState } from "react";
import "../about_company/aboutcom.css";
import img from "../../assets/aboutcom/img.png";

import { FaCircleCheck } from "react-icons/fa6";

const Aboutcom = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="aboutcom">
      <div className="container">
        <div className="aboutcom_main">
          <div className="about_box">
            <div className="about_left">
              <div className="aboutcom_title">
                <p>ABOUT OUR COMPANY</p>
                <h1>Our History</h1>
              </div>
              <p className="about_left_info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, veritatis praesentium nihil, officiis atque ut aut sunt
                nulla officia doloribus a minus ullam, ab magnam omnis nobis
                alias dolores unde?Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Commodi, veritatis praesentium nihil, officiis
                atque ut aut sunt nulla officia doloribus a minus ullam, ab
                magnam omnis nobis alias dolores unde?Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Commodi, veritatis
                praesentium nihil, officiis atque ut aut sunt nulla officia
                doloribus a minus ullam, ab magnam omnis nobis alias dolores
                unde?
              </p>

              <div className="big_div_constructions">
                
                <div className="box_constructions">
                  <div className="constructions_box1">
                    <span>
                      <FaCircleCheck />
                    </span>
                    <div className="constructions_title">
                      <h3>Construction</h3>
                      <p>Expert & modern systems </p>
                    </div>
                  </div>

                  <div className="constructions_box1">
                    <span>
                      <FaCircleCheck />
                    </span>
                    <div className="constructions_title">
                      <h3>Machinery</h3>
                      <p>Equipment relocation </p>
                    </div>
                  </div>
                </div>

                <div className="box_constructions">
                  <div className="constructions_box1">
                    <span>
                      <FaCircleCheck />
                    </span>
                    <div className="constructions_title">
                      <h3>Environmental</h3>
                      <p>Waste management</p>
                    </div>
                  </div>

                  <div className="constructions_box1">
                    <span>
                      <FaCircleCheck />
                    </span>
                    <div className="constructions_title">
                      <h3>Electrical Service</h3>
                      <p>Electrical supply stores</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="about_right">
              <div className="big_img">
                <div
                  className="about_right_img"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={resetTilt}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      transform: `rotateX(${-tilt.y * 30}deg) rotateY(${
                        tilt.x * 30
                      }deg)`,
                      transformOrigin: "center",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                <div className="img_bg_about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcom;
