import { useState } from "react";
import "../faq/faq.css";
import { IoIosArrowDown } from "react-icons/io";
import img from "../../assets/aboutcom/img.png";



import { GoArrowDownRight } from "react-icons/go";

const dropdownItems = [
  {
    title: "ALLOY 6005A",
    text: "This alloy is used for building structures and is used only for extruded profiles. It has a fairly high strength and, at the same time, can be pressed into more complex profiles than 6082 and 6061 alloys. Special advantage is in pressing thin-walled hollow profiles.",
  },
  {
    title: "ALLOY 6060",
    text: "The alloy with the highest compressibility (easy pressing) and the lowest sensitivity to hardening is the European aluminum alloy 6060 due to the lowest concentration of alloying elements. Typical applications: windows, stairs, handrails, truck body parts.",
  },
  {
    title: "ALLOY 6063",
    text: "Alloy 6063 has a finer grain structure than the 6060, provides a better cosmetic appearance after anodizing. It has high corrosion resistance and good workability and weldability. Common use includes a cylinder tube, electrical bus conductors and architectural applications.",
  },
  {
    title: "ALLOY 6082",
    text: "Aluminum alloy 6082 is most widely used in construction. Usually, this alloy is the main building aluminum alloy for both welded structures and structures without the use of welding. Alloy 6082 is a high-strength alloy, which is used in various types of aluminum rolled products.",
  },
];

const Faq = () => {
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

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq">
      <div className="container">
        <div className="faq_main">
          <div className="faq_left">
            {dropdownItems.map((item, index) => (
              <div
                key={index}
                className={`alloy-6005a_drop_down_box1 ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <div className="alloy-6005a_dropdown_left">
                  <h1
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.title}
                    <span
                      className={`dropdownarrow ${
                        openIndex === index ? "rotate" : ""
                      }`}
                    >
                      <GoArrowDownRight />
                    </span>
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="faq_right">
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
  );
};

export default Faq;
