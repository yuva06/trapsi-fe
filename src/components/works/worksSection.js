import React from "react";
import Grasp from "../../assets/workSection/grasp.png";
import YesPeople from "../../assets/workSection/yespeople.png";
import ChennaiCaters from "../../assets/workSection/chennaiCaters.png";
import ITBRF from "../../assets/workSection/itbrf.png";
import NativeLeadImg from "../../assets/workSection/nativeLead.png";
import Plumes from "../../assets/workSection/plumes.png";
import GraspBg from "../../assets/workSection/grasp_theme.jpg";
import YesPeopleBg from "../../assets/workSection/creative_yes.jpg";
import IfbrfBg from "../../assets/workSection/itbrf.jpg";
import NativeLeadBg from "../../assets/workSection/nativelead.jpg";
import ChennaiBg from "../../assets/workSection/chenai.jpg";
import PlumesBg from "../../assets/workSection/plumes.jpg";
import AOS from "aos";

const WorksSection = () => {
  AOS.init({
    once: true,
    duration: 1200,
  });

  return (
    <div>
      <section className="WorkHeader">
        <div className="container">
          <div className="h1-m" data-aos="fade-right">
            We collaborate with our clients to deliver transformative results
          </div>
        </div>
      </section>
      {/* <Testing /> */}
      <div className="container">
        <section className="worksDetailsMain">
          <div className="imgAb">
            <img src={GraspBg} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="cont">
                  <div className="h1-m" data-aos="fade-right">
                    Grasp Neet <br /> Academy
                  </div>
                  <div className="small-m" data-aos="fade-right">
                    Service
                  </div>
                  <ul data-aos="fade-right">
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Logo Design</li>
                    <li>Brand Identity</li>
                    <li>Social Media Marketing</li>
                  </ul>
                  <a
                    href="https://www.behance.net/gallery/120771755/Grasp-Neet-Academy-Brand-Identity"
                    rel="noreferrer"
                    target="_blank"
                    className="d-block-m"
                  >
                    <div
                      className="WorksSectionMainNavBtn"
                      data-aos="fade-right"
                    >
                      <div className="p-m">View Case Study</div>
                      <span className="p-m">⟶</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="WorksSectionMainImage">
                  <img src={Grasp} alt="" className="img-fluid" />
                </div>
                <a
                  href="https://www.behance.net/gallery/120771755/Grasp-Neet-Academy-Brand-Identity"
                  rel="noreferrer"
                  target="_blank"
                  className="d-block-m d-none-m"
                >
                  <div className="WorksSectionMainNavBtn" data-aos="fade-right">
                    <div className="p-m">View Case Study</div>
                    <span className="p-m">⟶</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="worksDetailsMain worksDetailsMain2">
          <div className="imgAb">
            <img src={YesPeopleBg} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="cont">
                  <div className="h1-m" data-aos="fade-right">
                    Yespeopletainment
                  </div>
                  <div className="small-m" data-aos="fade-right">
                    Service
                  </div>
                  <ul data-aos="fade-right">
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Logo Design</li>
                    <li>Brand Identity</li>
                  </ul>{" "}
                  <a
                    href="https://www.behance.net/gallery/120773571/yespeopletainment-Business-Brand-Identity"
                    rel="noreferrer"
                    target="_blank"
                    className="d-block-m"
                  >
                    <div
                      className="WorksSectionMainNavBtn"
                      data-aos="fade-right"
                    >
                      <div className="p-m">View Case Study</div>
                      <span className="p-m">⟶</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="WorksSectionMainImage">
                  <img src={YesPeople} alt="" className="img-fluid" />
                </div>
                <a
                  href="https://www.behance.net/gallery/120773571/yespeopletainment-Business-Brand-Identity"
                  rel="noreferrer"
                  target="_blank"
                  className="d-block-m d-none-m"
                >
                  <div className="WorksSectionMainNavBtn" data-aos="fade-right">
                    <div className="p-m">View Case Study</div>
                    <span className="p-m">⟶</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="worksDetailsMain worksDetailsMain3">
          <div className="imgAb">
            <img src={IfbrfBg} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="cont">
                  <div className="h1-m" data-aos="fade-right">
                    ITBRF
                  </div>
                  <div className="small-m" data-aos="fade-right">
                    Service
                  </div>
                  <ul data-aos="fade-right">
                    <li>Web Development</li>
                    <li>Brand Identity</li>
                    <li>Brand Colletrals</li>
                  </ul>
                  <a
                    href="https://www.behance.net/gallery/120772001/ITBRF-Brand-Identity"
                    rel="noreferrer"
                    target="_blank"
                    className="d-block-m"
                  >
                    <div
                      className="WorksSectionMainNavBtn"
                      data-aos="fade-right"
                    >
                      <div className="p-m">View Case Study</div>
                      <span className="p-m">⟶</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="WorksSectionMainImage">
                  <img src={ITBRF} alt="" className="img-fluid" />
                </div>
                <a
                  href="https://www.behance.net/gallery/120772001/ITBRF-Brand-Identity"
                  rel="noreferrer"
                  target="_blank"
                  className="d-block-m d-none-m"
                >
                  <div className="WorksSectionMainNavBtn" data-aos="fade-right">
                    <div className="p-m">View Case Study</div>
                    <span className="p-m">⟶</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="worksDetailsMain worksDetailsMain10">
          <div className="imgAb">
            <img src={NativeLeadBg} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="cont">
                  <div className="h1-m" data-aos="fade-right">
                    Startup Tamilnadu
                  </div>
                  <div className="small-m" data-aos="fade-right">
                    Service
                  </div>
                  <ul data-aos="fade-right">
                    <li>Web Design</li>
                    <li>Social Media Posters</li>
                  </ul>
                  <a
                    href="https://www.behance.net/gallery/121415985/Startup-Event-Digital-Support"
                    rel="noreferrer"
                    target="_blank"
                    className="d-block-m"
                  >
                    <div
                      className="WorksSectionMainNavBtn"
                      data-aos="fade-right"
                    >
                      <div className="p-m">View Case Study</div>
                      <span className="p-m">⟶</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="WorksSectionMainImage">
                  <img src={NativeLeadImg} alt="" className="img-fluid" />
                </div>
                <a
                  href="https://www.behance.net/gallery/121415985/Startup-Event-Digital-Support"
                  rel="noreferrer"
                  target="_blank"
                  className="d-block-m d-none-m"
                >
                  <div className="WorksSectionMainNavBtn" data-aos="fade-right">
                    <div className="p-m">View Case Study</div>
                    <span className="p-m">⟶</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="worksDetailsMain worksDetailsMain5">
          <div className="imgAb">
            <img src={ChennaiBg} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="cont">
                  <div className="h1-m" data-aos="fade-right">
                    Chenai Caters
                  </div>
                  <div className="small-m" data-aos="fade-right">
                    Service
                  </div>
                  <ul data-aos="fade-right">
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Brand Identity</li>
                    <li>Brand Colletrals</li>
                  </ul>
                  <a
                    href="https://www.behance.net/gallery/120772393/Food-Delivery-brand-Identity"
                    rel="noreferrer"
                    target="_blank"
                    className="d-block-m"
                  >
                    <div
                      className="WorksSectionMainNavBtn"
                      data-aos="fade-right"
                    >
                      <div className="p-m">View Case Study</div>
                      <span className="p-m">⟶</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="WorksSectionMainImage">
                  <img src={ChennaiCaters} alt="" className="img-fluid" />
                </div>
                <a
                  href="https://www.behance.net/gallery/120772393/Food-Delivery-brand-Identity"
                  rel="noreferrer"
                  target="_blank"
                  className="d-block-m d-none-m"
                >
                  <div className="WorksSectionMainNavBtn" data-aos="fade-right">
                    <div className="p-m">View Case Study</div>
                    <span className="p-m">⟶</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="worksDetailsMain worksDetailsMain6">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="cont">
                  <div className="h1-m" data-aos="fade-right">
                    varaivan
                  </div>
                  <div className="small-m" data-aos="fade-right">
                    Service
                  </div>
                  <ul data-aos="fade-right">
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Brand Identity</li>
                    <li>Brand Colletrals</li>
                  </ul>
                  <a
                    href="#s"
                    rel="noreferrer"
                    target="_blank"
                    className="d-block-m"
                  >
                    <div
                      className="WorksSectionMainNavBtn"
                      data-aos="fade-right"
                    >
                      <div className="p-m">View Case Study</div>
                      <span className="p-m">⟶</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="WorksSectionMainImage">
                  <img src={Varaivan} alt="" className="img-fluid" />
                </div>
                <a
                  href="#v"
                  rel="noreferrer"
                  target="_blank"
                  className="d-block-m d-none-m"
                >
                  <div className="WorksSectionMainNavBtn" data-aos="fade-right">
                    <div className="p-m">View Case Study</div>
                    <span className="p-m">⟶</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <section className="worksDetailsMain  mb-5 worksDetailsMain8">
          <div className="imgAb">
            <img src={PlumesBg} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="cont">
                  <div className="h1-m" data-aos="fade-right">
                    Plumes
                  </div>
                  <div className="small-m" data-aos="fade-right">
                    Service
                  </div>
                  <ul data-aos="fade-right">
                    <li>Web Design</li>
                    <li>Logo Design</li>
                    <li>Brand Identity</li>
                  </ul>
                  <a
                    href="https://www.behance.net/gallery/120774293/Plumes-English-Training-Brand-Identity"
                    rel="noreferrer"
                    target="_blank"
                    className="d-block-m"
                  >
                    <div
                      className="WorksSectionMainNavBtn"
                      data-aos="fade-right"
                    >
                      <div className="p-m">View Case Study</div>
                      <span className="p-m">⟶</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="WorksSectionMainImage">
                  <img src={Plumes} alt="" className="img-fluid" />
                </div>
                <a
                  href="https://www.behance.net/gallery/120774293/Plumes-English-Training-Brand-Identity"
                  rel="noreferrer"
                  target="_blank"
                  className="d-block-m d-none-m"
                >
                  <div className="WorksSectionMainNavBtn">
                    <div className="p-m">View Case Study</div>
                    <span className="p-m">⟶</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorksSection;
