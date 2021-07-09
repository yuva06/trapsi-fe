import React ,{useState} from "react";
import BxImeX from "../../../assets/learnSection/bx_ime.png";
import Portfolio from "../../../assets/learnSection/portfolio.png";
import FluentLive from "../../../assets/learnSection/fluent_live.png";
import Intersect from "../../../assets/learnSection/Intersect.jpg";
import Review from "../../../assets/learnSection/review.png";
import Vector from "../../../assets/learnSection/Vector.png";
import VectorWhite from "../../../assets/learnSection/Vector-white.png";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FrontEndImages, DatabaseImages, BackEndImages } from "./TechLogos";

const FullStack = () => {
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
    course: "FullStack",
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
      <section className="KickstartSection FullStackHeroSection">
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
                    Kickstat your <span>Full Stack Developer</span> Career From
                    Here
                  </div>
                  <img src={Vector} alt="" />
                </div>
                <ul>
                  <li data-aos="fade-right">
                    <span>⟶</span>100% Job Placement Support
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>Learn from Startup Experts
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>Get Experience from Live Projects
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>Work in Real Time Project
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>Intern Oppurtunity in TrapsiBytes
                  </li>
                  {/* <li data-aos="fade-right">
                    <span>⟶</span>Intern Oppurtunity in TrapsiBytes
                  </li> */}
                  <li>
                    <span>⟶</span>Build your own Portfolio
                  </li>
                </ul>
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

      <section className="LearnDetailsSection">
        <div className="container containerLearn">
          <div className="row">
            <div className="col-md-4">
              <div className="LearnDetailsSectionCon" data-aos="fade-up">
                <img src={BxImeX} alt="" />
                <div className="h1-m">
                  Duration <br /> 2-3 Months
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="LearnDetailsSectionCon" data-aos="fade-up">
                <img src={Portfolio} alt="" />
                <div className="h1-m">
                  Build your <br /> Ecommerce <br /> Portfolio
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="LearnDetailsSectionCon mb-0" data-aos="fade-up">
                <img src={FluentLive} alt="" />
                <div className="h1-m">
                  Online Live Class <br /> Not Recorded <br /> Video
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="FullStacCourseDuration">
        <div className="container containerLearn">
          <div
            className="FullStacCourseDurationTitle h1-m"
            data-aos="fade-right"
          >
            <div className="h1-m">Course Details</div>
            <img src={Vector} alt="" />
          </div>
          <div className="FullStacCourseDurationChilds">
            <div className="box-fullstack">
              <div className="h1-m" data-aos="fade-right">
                Front-End Development
              </div>
              <div className="conFullStack">
                <div className="small-m" data-aos="fade-right">
                  Get a deeper understanding of Client Side Programming or in
                  other words the front end development by developing highly
                  responsive web pages across languages.
                </div>
                <ul>
                  <li data-aos="fade-right">
                    <span>⟶</span>Understand how websites work and how HTML, CSS
                    and JavaScript contribute.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Understand how the internet works.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Learn HTML tags & features of HTML5.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Learn the fundamentals of implementing responsive web
                    design.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    How to use bootstrap to create a web page.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Adding symbols using Font Awesome.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Strengthen your basics in React JS.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="FullStacCourseDurationChilds">
            <div className="box-fullstack">
              <div className="h1-m" data-aos="fade-right">
                Back-End Development
              </div>
              <div className="conFullStack">
                <div className="small-m" data-aos="fade-right">
                  Learn Data Structures and Algorithms write Efficient, Robust,
                  Optimized code. Learn how to build robust & scalable web
                  servers with a thorough understanding of AWS.
                </div>
                <ul>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Getting better clarity about Algorithms and Data structures.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Learn to build better data types like Queue, stack and list.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Learn to use mathematical oriented algorithms.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Get to know about structural and non structural databases.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Learn to use MySQL and Mongo connectors.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Getting better understanding about RDBMS concepts.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Database design and scaling.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="FullStacCourseDurationChilds">
            <div className="box-fullstack">
              <div className="h1-m" data-aos="fade-right">
                Database and Cloud Hosting
              </div>
              <div className="conFullStack">
                <div className="small-m" data-aos="fade-right">
                  Get a deeper understanding of Client Side Programming or in
                  other words the front end development by developing highly
                  responsive web pages across languages.
                </div>
                <ul>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Understand how websites work and how HTML, CSS and
                    JavaScript contribute.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Understand how the internet works.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Learn HTML tags & features of HTML5.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Learn the fundamentals of implementing responsive web
                    design.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    How to use bootstrap to create a web page.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Adding symbols using Font Awesome.
                  </li>
                  <li data-aos="fade-right">
                    <span>⟶</span>
                    Strengthen your basics in React JS.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="FullTechCovered">
        <div className="container containerLearn">
          <div className="FullTechCoveredTitle" data-aos="fade-right">
            <div className="h1-m">Technologies Covered</div>
            <img src={VectorWhite} alt="" />
          </div>
          {/* Front End Developer */}
          <div className="FullTechCoveredFED">
            <div className="h1-m" data-aos="fade-right">
              Front-End Development
            </div>
          </div>
          <div className="row">
            {FrontEndImages.map((data, index) => {
              return (
                <div key={index} className="col-xl-2 col-md-3 col-sm-6 col-6">
                  <div data-aos="fade-up">
                    <div className="FullTechCoveredChildFlex">
                      <img src={data.Image} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="FullTechCoveredFED">
            <div className="h1-m" data-aos="fade-right">
              Back-End Development
            </div>
          </div>
          <div className="row">
            {BackEndImages.map((data, index) => {
              return (
                <div key={index} className="col-xl-2 col-md-3 col-sm-6 col-6">
                  <div data-aos="fade-up">
                    <div className="FullTechCoveredChildFlex">
                      <img src={data.Image} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="FullTechCoveredFED">
            <div className="h1-m" data-aos="fade-right">
              Database and Cloud Hosting
            </div>
          </div>
          <div className="row">
            {DatabaseImages.map((data, index) => {
              return (
                <div key={index} className="col-xl-2 col-md-3 col-sm-6 col-6">
                  <div data-aos="fade-up">
                    <div className="FullTechCoveredChildFlex">
                      <img src={data.Image} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })}
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

export default FullStack;
