import React from "react";
import GraspImage from "../../assets/heroSection/grasp.png";
import YesPeople from "../../assets/heroSection/yesperople.png";
import ITBRF from "../../assets/heroSection/itbrf.png";
import ChennaiCaters from "../../assets/heroSection/chenai-caters.png";
import IMCImage from "../../assets/heroSection/imc.png";
import PlumesImg from "../../assets/heroSection/plumes.png";
import ResponsiverMobImg from "../../assets/heroSection/responsive-mob1.png";
import CreativeImg from "../../assets/heroSection/creative1.png";
import ThemeImg from "../../assets/heroSection/theme.png";
import GraspSmall1 from "../../assets/heroSection/small-images/grasp-min.jpg";
import GraspSmall2 from "../../assets/heroSection/small-images/grasp-2-min.jpg";
import YesPeopleSmall1 from "../../assets/heroSection/small-images/yes-min.jpg";
import YesPeopleSmall2 from "../../assets/heroSection/small-images/yes-2-min.jpg";
import ItbrfSmall1 from "../../assets/heroSection/small-images/itbrf-1-min.jpg";
import ItbrfSmall2 from "../../assets/heroSection/small-images/itbrf-2-min.jpg";
import ChennaiSmall1 from "../../assets/heroSection/small-images/chennai-min.jpg";
import ChennaiSmall2 from "../../assets/heroSection/small-images/chennai-2-min.jpg";
import PlumesSmall1 from "../../assets/heroSection/small-images/plumes-min.jpg";
import PlumesSmall2 from "../../assets/heroSection/small-images/plumes-2-min.jpg";
import ImcSmall1 from "../../assets/heroSection/small-images/imcreambag-min.jpg";
import ImcSmall2 from "../../assets/heroSection/small-images/imcreambox-min.jpg";
import FullRes1 from "../../assets/heroSection/fullscreen/responsive_1-min.jpg";
import FullRes2 from "../../assets/heroSection/fullscreen/responsive_2-min.jpg";
import FullTheme1 from "../../assets/heroSection/fullscreen/grasp_theme-min.jpg";
import FullTheme2 from "../../assets/heroSection/fullscreen/yespeople-min.jpg";
import FullCreative1 from "../../assets/heroSection/fullscreen/creative_spa-min.jpg";
import FullCreative2 from "../../assets/heroSection/fullscreen/creative_yes-min.jpg";
import FullCreative3 from "../../assets/heroSection/fullscreen/itbrf_creative-min.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import Typical from "react-typical";

const HeroSection = () => {
  AOS.init({
    once: true,
    duration: 1200,
  });

  return (
    <>
      <section className="HeroMainNewSection">
        <div className="context">
          <div className="h1-m">
            We are the
            <Typical
              steps={["Brand", 1000, "Website", 1000, "Application", 1000]}
              loop={Infinity}
              wrapper="div"
            />
            Developers
          </div>
        </div>
        <div className="area-ani">
          <ul className="circles-ani">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="mouse_scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
          </div>
        </div>
      </section>

      <section className="DreamsWeBuild">
        <div className="container">
          <div className="DreamsWeBuildMainTitle h1-m">
            BUILD YOUR DIGITAL DREAMS
          </div>
          <div className="row align-items-center">
            <div className="col-md-8 order-2 order-md-1">
              <div className="row">
                <div className="col-md-4 col-12">
                  <div className="DreamsWeBuildChild">
                    <div className="cardm">
                      <div className="cardm--image">
                        <img src={GraspImage} alt="" />
                      </div>
                      <div className="cardm--info info--1">
                        <div className="info--image">
                          <img src={GraspSmall1} alt="" />
                        </div>
                      </div>
                      <div className="cardm--info info--2">
                        <div className="info--image">
                          <img src={GraspSmall2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="DreamsWeBuildChild">
                    <div className="cardm">
                      <div className="cardm--image">
                        <img src={YesPeople} alt="" />
                      </div>
                      <div className="cardm--info info--1">
                        <div className="info--image">
                          <img src={YesPeopleSmall1} alt="" />
                        </div>
                      </div>
                      <div className="cardm--info info--2">
                        <div className="info--image">
                          <img src={YesPeopleSmall2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="DreamsWeBuildChild">
                    <div className="cardm">
                      <div className="cardm--image">
                        <img src={ITBRF} alt="" />
                      </div>
                      <div className="cardm--info info--1">
                        <div className="info--image">
                          <img src={ItbrfSmall1} alt="" />
                        </div>
                      </div>
                      <div className="cardm--info info--2">
                        <div className="info--image">
                          <img src={ItbrfSmall2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="DreamsWeBuildChild">
                    <div className="cardm">
                      <div className="cardm--image">
                        <img src={ChennaiCaters} alt="" />
                      </div>
                      <div className="cardm--info info--1">
                        <div className="info--image">
                          <img src={ChennaiSmall1} alt="" />
                        </div>
                      </div>
                      <div className="cardm--info info--2">
                        <div className="info--image">
                          <img src={ChennaiSmall2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="DreamsWeBuildChild">
                    <div className="cardm">
                      <div className="cardm--image">
                        <img src={IMCImage} alt="" />
                      </div>
                      <div className="cardm--info info--1">
                        <div className="info--image">
                          <img src={ImcSmall1} alt="" />
                        </div>
                      </div>
                      <div className="cardm--info info--2">
                        <div className="info--image">
                          <img src={ImcSmall2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="DreamsWeBuildChild">
                    <div className="cardm">
                      <div className="cardm--image mt-3">
                        <img src={PlumesImg} alt="" />
                      </div>
                      <div className="cardm--info info--1">
                        <div className="info--image">
                          <img src={PlumesSmall1} alt="" />
                        </div>
                      </div>
                      <div className="cardm--info info--2">
                        <div className="info--image">
                          <img src={PlumesSmall2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 order-1 order-md-2">
              <div className="DreamsWeBuildTitle text-left">
                <div className="h1-m" data-aos="fade-up">
                  Our Inspiring Works
                </div>
                <Link to="/works">
                  <div className="WorksSectionMainNavBtn" data-aos="fade-up">
                    <div className="p-m">View Case Study</div>
                    <span className="p-m">⟶</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="HeroResponsive">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="h1-m">
                Make Everything <span>Responsive</span>
              </div>
              <div className="p-m" data-aos="fade-right">
                Every brand website turns into a wonderful one when it acquires
                the capability of responsive web options. It turns up the
                chances for a good hike in web traffic. Trapsi Bytes designs the
                website with ease of access. The easiness can be unleashed
                through cool experiences in the change of orientations, screen
                size, and platforms. So, get set and be ready for a smooth surf
                through our website.
              </div>
            </div>
            <div className="col-md-6">
              <img src={ResponsiverMobImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="HeroBigFullImg">
        <div className="row">
          <img src={FullRes1} alt="" className="img-fluid" />
        </div>
        <div className="row">
          <img src={FullRes2} alt="" className="img-fluid" />
        </div>
      </section>

      <section className="HeroResponsive">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-sm-1">
              <img src={ThemeImg} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 order-1 order-sm-2">
              <div className="h1-m">
                We Build <br /> Brand <span>Theme</span>
              </div>
              <div className="p-m" data-aos="fade-right">
                A brand stands unique from other brands, mainly because of a
                specified framework. The specification showcases the uniqueness
                in one's branding. Trapsi Bytes carefully handpicks their
                audience and designs it in favour of them. Simultaneously, we're
                working on updating and improvising unique distinctiveness from
                our competitors. This greatly contributed to optimizing our
                website in the digital space.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="HeroBigFullImg">
        <div className="row">
          <img src={FullTheme1} alt="" className="img-fluid" />
        </div>
        <div className="row">
          <img src={FullTheme2} alt="" className="img-fluid" />
        </div>
      </section>

      <section className="HeroResponsive">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="h1-m">
                We are <br /> <span>Creative</span>
              </div>
              <div className="p-m" data-aos="fade-right">
                Creativity is the root cause for one-touch libraries and
                easy-to-finish unfinishable tasks. Incorporating them in a work
                is certainly an exceptional skill. One who's at top of the heap
                will get a throne! Trapsi Bytes hammered out the hidden alleys
                in digital marketing and presenting you the outcomes through the
                creative scrutinising into the works collected. The design of
                the website can be found with a course of the arrangement. It
                will wholly kindle up comfort from the users perspective.
              </div>
            </div>
            <div className="col-md-6">
              <img src={CreativeImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="HeroBigFullImg">
        <div className="row">
          <img src={FullCreative1} alt="" className="img-fluid" />
        </div>
        <div className="row">
          <img src={FullCreative2} alt="" className="img-fluid" />
        </div>
        <div className="row">
          <img src={FullCreative3} alt="" className="img-fluid" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
