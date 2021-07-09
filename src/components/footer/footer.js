import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="HeroCallSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="h1-m">
                Let's Build Your <br /> Brand Together
                <Link to="/contact">
                  <div className="WorksSectionMainNavBtn">
                    <div className="p-m">Get Started</div>
                    <span className="p-m">⟶</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="HeroFooter">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 order-2 order-md-1">
              <div className="p-m">
                © {new Date().getFullYear()} All Rights Reserved |{" "}
                <a
                  href="https://www.trapsibytes.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Trapsi Bytes
                </a>
              </div>
            </div>
            <div className="col-md-4 logo order-1 order-md-2">
              <a
                href="https://www.trapsibytes.com"
                rel="noreferrer"
                target="_blank"
              >
                <img src={Logo} alt="" />
              </a>
            </div>
            <div className="col-md-4 order-3 order-md-3">
              <div className="row HeroFooterNewFlex">
                <div className="HeroFooterSmLinksFlex align-items-center">
                  <div className="small-m">Follow us on</div>
                  <a
                    href="https://www.facebook.com/trapsibytes"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/trapsibytes"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.behance.net/arulmurugan1"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-behance" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCZcd9LIvGq_jkl0fC7_rmnA"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/trapsi-bytes-official/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
