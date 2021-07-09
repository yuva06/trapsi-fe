import React from "react";
import GraspNew from "../../assets/serviceSection/grasp_new.jpg";
import GraspOld from "../../assets/serviceSection/grasp_old.jpg";
import MadeByNew from "../../assets/serviceSection/madeby_new.jpg";
import MadeByOld from "../../assets/serviceSection/madeby_old.jpg";
import PanimalarNew from "../../assets/serviceSection/panimalar_new-min.jpg";
import PanimalarOld from "../../assets/serviceSection/panimalar_old-min.jpg";
import AOS from "aos";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const ServiceSection = () => {
  AOS.init({
    once: true,
    duration: 1200,
  });
  return (
    <>
      <section className="ServiceHeader">
        <div className="container">
          <div className="h1-m" data-aos="fade-right">
            We help create transformative Brands that move business,people and
            world forward
          </div>
        </div>
      </section>
      <section className="HeroResponsive ServiceSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="h1-m">
                <span>Foundation</span>
              </div>
              <div className="p-m" data-aos="fade-right">
                Laying down a place for the brands in the digital area is the
                primary step in marketing. It enables a firm base for any
                company to be in the field. It ends up in the entrepreneur to
                find out his own strengths, target audience, brand identity, and
                of course the goals. Trapsi Bytes here to bring you up through
                the light for all your rounding questions and curiosities.
              </div>
              <ul>
                <li data-aos="fade-right">
                  <span>⟶</span>Brand Name
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>Logo Design
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>Brand Identity
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>Brand Colletrals
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>Brand Strategy
                </li>
              </ul>
            </div>
            <div className="col-md-6 ServiceComBg">
              <div className="ImgComparision">
                <ReactCompareSlider
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        backdropFilter: undefined,
                        background: "#000",
                        border: 0,
                        color: "#fff",
                      }}
                      linesStyle={{
                        color: "#000",
                      }}
                    />
                  }
                  itemOne={
                    <ReactCompareSliderImage src={GraspOld} alt="Image one" />
                  }
                  itemTwo={
                    <ReactCompareSliderImage src={GraspNew} alt="Image two" />
                  }
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="note-m">Slide to feel the difference</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="HeroResponsive ServiceSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="ImgComparision">
                <ReactCompareSlider
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        backdropFilter: undefined,
                        background: "#000",
                        border: 0,
                        color: "#fff",
                      }}
                      linesStyle={{
                        color: "#000",
                      }}
                    />
                  }
                  itemOne={
                    <ReactCompareSliderImage src={MadeByOld} alt="Image one" />
                  }
                  itemTwo={
                    <ReactCompareSliderImage src={MadeByNew} alt="Image two" />
                  }
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="note-m">Slide to feel the difference</div>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="h1-m">
                <span>Development</span>
              </div>
              <div className="p-m" data-aos="fade-right">
                The map leads the companies who have known their strengths and
                weaknesses to the next level called the development stage. Only
                after knowing oneself from top to bottom, a company can excel in
                their services. Trapsi Bytes assists in your growth by creating
                innovative logos which shows your company's vision and mission
                at a single gaze. Further, this extends to reaching out target
                audience through creative and attractive designs of websites.
              </div>
              <ul>
                <li data-aos="fade-right">
                  <span>⟶</span>UI/UX
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>Web Design
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>Web Development
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>E-Commerce
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>App Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="HeroResponsive ServiceSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="h1-m">
                <span>Marketing</span>
              </div>
              <div className="p-m" data-aos="fade-right">
                When everything is set for flying, why hesitate though! Just
                make the sky filling with your colours. To get your innovations
                for the searching eyes, you need marketing. Trapsi Bytes looks
                after the predicaments through their cutting edge strategies
                through designs and campaigns. Remember that, the wider the
                reach, the more the audience.
              </div>
              <ul>
                <li data-aos="fade-right">
                  <span>⟶</span>Marketing Strategy
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>Social Media Marketing
                </li>
                <li data-aos="fade-right">
                  <span>⟶</span>Search Engine Optimization
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="ImgComparision">
                <ReactCompareSlider
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        backdropFilter: undefined,
                        background: "#000",
                        border: 0,
                        color: "#fff",
                      }}
                      linesStyle={{
                        color: "#000",
                      }}
                    />
                  }
                  itemOne={
                    <ReactCompareSliderImage
                      src={PanimalarOld}
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={PanimalarNew}
                      alt="Image two"
                    />
                  }
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="note-m">Slide to feel the difference</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
