import React,{useState} from "react";
import OnlineClass from "../../../assets/learnSection/online-live-class.png";
import UIUX from "../../../assets/learnSection/ui-ux.png";
import Portfolio from "../../../assets/learnSection/portfolio.png";
import LightBulb from "../../../assets/learnSection/light-bulb.png";
import Intersect from "../../../assets/learnSection/Intersect.jpg";
import Review from "../../../assets/learnSection/review.png";
import Vector from "../../../assets/learnSection/Vector.png";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const LearningUIUX = () => {
  const [name, setName] = useState();
  const [mobileno, setMobileno] = useState();
  const [email, setEmail] = useState();
  AOS.init({
    once: true,
    duration: 1200,
  });
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  const nam =(e)=>{
    setName(e.target.value);
  }
  const mob =(e)=>{
    setMobileno(e.target.value);
  }
  const ema =(e)=>{
    setEmail(e.target.value);
  }

  const sub =(e)=>{
    e.preventDefault();
  let detial = {
    name: name,
    mobileno: mobileno,
    email: email,
    course: "UI/UX",
  };
  // console.log("data", detial);

  fetch(
    "https://trapsibytes.herokuapp.com/connect/RegistrationApplication/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detial),
    }
  )
    .then((response) => response.json())
    .then((response) => {
       alert("success");
      // console.log("data", detial);
    })
    .catch((err) => {});
  }
  function ArrowPrev(props) {
    return (
      <span className="ArrowSlider ArrowPrev" onClick={props.onClick}>
        ⟶
      </span>
    );
  }
  function ArrowNext(props) {
    return (
      <span className="ArrowSlider ArrowNext" onClick={props.onClick}>
        ⟶
      </span>
    );
  }

  return (
    <main className="LearningSection">
      <section className="KickstartSection">
        <span className="bgBlk"></span>
        <div className="container containerLearn">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="KickstartCon">
                <div className="small-m" data-aos="fade-right">
                  Learn From Brand
                </div>
                <div className="h1-m" data-aos="fade-right">
                  <div className="h1-m">
                    Kickstat your ux/ui Design Career From Here
                  </div>
                  <img src={Vector} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="KickstartForm" data-aos="fade-right">
                <form>
                  <div className="h1-m">Become a UX/UI Expert</div>
                  <div className="KickstartFormGroup">
                    <div className="small-m">Name</div>
                    <input onChange={nam} type="text" required />
                  </div>
                  <div className="KickstartFormGroup">
                    <div className="small-m">Phone Number</div>
                    <input onChange={mob} type="text" required />
                  </div>
                  <div className="KickstartFormGroup">
                    <div className="small-m">Email</div>
                    <input onChange={ema} type="text" required />
                  </div>
                  <div className="KickstartFormGroupBtn">
                    <button onClick={sub} type="submit">Enroll Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="OnlineLiveClass">
        <div className="container containerLearn">
          <div className="row align-items-center">
            <div className="col-md-7 order-2 order-md-1">
              <div className="OnlineLiveClassImg ">
                <img
                  src={OnlineClass}
                  alt=""
                  className="img-fluid"
                  width="450px"
                />
              </div>
            </div>
            <div className="col-md-5 order-1 order-md-2">
              <div className="OnlineLiveClassCon">
                <div className="title">
                  Online <br />
                  <span>Live</span> <br />
                  Class
                </div>
                <ul>
                  <li data-aos="fade-right">
                    <span>⟶</span>Learn from anywhere
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>Stay with Mentor
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>Get Experience from Live Projects
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>Oppurtunity to Get Internship
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>UX/UI Portfolio
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="LearnDetailsSection">
        <div className="container containerLearn">
          <div className="row">
            <div className="col-md-4" data-aos="fade-up">
              <div className="LearnDetailsSectionCon">
                <img src={UIUX} alt="" />
                <div className="h1-m">
                  Learn Complete <br /> UX/UI Design <br /> Process
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="LearnDetailsSectionCon">
                <img src={Portfolio} alt="" />
                <div className="h1-m">
                  Build your <br /> UX UI Design <br /> Portfolio
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="LearnDetailsSectionCon mb-0">
                <img src={LightBulb} alt="" />
                <div className="h1-m">
                  No Coding Skills <br /> Required
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="LearnProtfolioPro">
        <div className="container containerLearn">
          <div
            className="LearnProtfolioProSliderTitle h1-m"
            data-aos="fade-right"
          >
            <div className="h1-m">Portfolio Projects</div>
            <img src={Vector} alt="" />
          </div>
          <div className="LearnProtfolioProSlider">
            <Slider
              {...settings}
              nextArrow={<ArrowNext />}
              prevArrow={<ArrowPrev />}
            >
              <div className="LearnProtfolioProSliderBox">
                <img src={Intersect} alt="" />
              </div>
              <div className="LearnProtfolioProSliderBox">
                <img src={Intersect} alt="" />
              </div>
              <div className="LearnProtfolioProSliderBox">
                <img src={Intersect} alt="" />
              </div>
            </Slider>
          </div>
          <div className="small-m">
            <Link to="/works">View our Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="LearnWYWL">
        <div className="container containerLearn">
          <div className="LearnWYWLTitle h1-m" data-aos="fade-right">
            <div className="h1-m">What you will Learn</div>{" "}
            <img src={Vector} alt="" />
          </div>
          <div className="row">
            <div
              className="col-md-6 col-xl-4 col-sm-6 col-6"
              data-aos="fade-up"
            >
              <div className="LearnWYWLChild">
                <div className="h1-m">Introduction</div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 col-sm-6 col-6"
              data-aos="fade-up"
            >
              <div className="LearnWYWLChild">
                <div className="h1-m">UX Design</div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 col-sm-6 col-6"
              data-aos="fade-up"
            >
              <div className="LearnWYWLChild">
                <div className="h1-m">User Research</div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 col-sm-6 col-6"
              data-aos="fade-up"
            >
              <div className="LearnWYWLChild">
                <div className="h1-m">Interaction Design</div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 col-sm-6 col-6"
              data-aos="fade-up"
            >
              <div className="LearnWYWLChild">
                <div className="h1-m">UI Design</div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 col-sm-6 col-6"
              data-aos="fade-up"
            >
              <div className="LearnWYWLChild">
                <div className="h1-m">Usability Testing</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="OnlineLiveClass LearnGoogleIt">
        <div className="container containerLearn">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="OnlineLiveClassCon">
                <div className="h1-m" data-aos="fade-right">
                  Google it . <br />
                  Our Reviews <br />
                  and Ratings
                  <img src={Vector} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="OnlineLiveClassImg">
                <img src={Review} alt="" className="img-fluid" width="450px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningUIUX;
