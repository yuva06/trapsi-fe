import React from "react";
import UIUX from "../../assets/learnSection/ui-ux-card.jpg";
import FSD from "../../assets/learnSection/full-stack-dev-min.jpg";
import MERN from "../../assets/learnSection/mern-stack-min.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";

const LearningPage = () => {
  AOS.init({
    once: true,
    duration: 1200,
  });
  return (
    <div>
      <section className="ServiceHeader learningSectionLand">
        <div className="container">
          <div className="h1-m" data-aos="fade-right">
            Learning
          </div>
        </div>
        <span></span>
      </section>

      <section className="learningSectionLandPro">
        <div className="container">
          <div className="learningSectionLandProTitle h1-m">
            What we tech for you?
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4 col-12">
              <div>
                <div className="learningSectionLandProCard">
                  <div className="learningSectionLandProCardImg">
                    <img src={UIUX} alt="" />
                    <span>
                      <Link to="/learning/ui-ux">Explore More</Link>
                    </span>
                  </div>
                  <div className="learningSectionLandProCardCon">
                    <div className="h1-m">UI/UX Design</div>
                    <div className="small-m">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ducimus repellat dignissimos aut cumque aliquam laudantium
                      officiis minus esse rerum reprehenderit.
                    </div>
                    <Link to="/works">
                      <div
                        className="WorksSectionMainNavBtn"
                        data-aos="fade-right"
                      >
                        <div className="p-m">Explore More</div>
                        <span className="p-m">⟶</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-12">
              <div>
                <div className="learningSectionLandProCard">
                  <div className="learningSectionLandProCardImg">
                    <img src={FSD} alt="" />
                    <span>
                      <Link to="/learning/full-stack-dev">Explore More</Link>
                    </span>
                  </div>
                  <div className="learningSectionLandProCardCon">
                    <div className="h1-m">Full Stack Developer</div>
                    <div className="small-m">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ducimus repellat dignissimos aut cumque aliquam laudantium
                      officiis minus esse rerum reprehenderit.
                    </div>
                    <Link to="/works">
                      <div
                        className="WorksSectionMainNavBtn"
                        data-aos="fade-right"
                      >
                        <div className="p-m">Explore More</div>
                        <span className="p-m">⟶</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-12">
              <div>
                <div className="learningSectionLandProCard">
                  <div className="learningSectionLandProCardImg">
                    <img src={MERN} alt="" />
                    <span>
                      <Link to="/learning/ui-ux">Explore More</Link>
                    </span>
                  </div>
                  <div className="learningSectionLandProCardCon">
                    <div className="h1-m">MERN Stack Developer</div>
                    <div className="small-m">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ducimus repellat dignissimos aut cumque aliquam laudantium
                      officiis minus esse rerum reprehenderit.
                    </div>
                    <Link to="/works">
                      <div
                        className="WorksSectionMainNavBtn"
                        data-aos="fade-right"
                      >
                        <div className="p-m">Explore More</div>
                        <span className="p-m">⟶</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LearningPage;
