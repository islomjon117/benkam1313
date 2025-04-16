import "../servisesPage/servisespage.css";

import img1 from '../../assets/servisespage/img1.png'


const Servisespg = () => {
  return (
    <div>
      <div className="servisespg">
        <div className="container">
          <div className="servisespg_main">
            <div className="servisespg_title">
              <p>SERVICES</p>
              <h1>What We Do?</h1>
            </div>

            <div className="servises_boxs">
              <div className="servises_box">
                <div className="box_icon">
                  <img src={img1} alt="" />
                </div>
                <div className="box_title">
                  <h1>Lorem ipsum </h1>
                </div>
                <div className="box_subtitle">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servisespg;
