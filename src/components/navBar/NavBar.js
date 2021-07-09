import React from "react";
import Logo from "../../assets/logo.png";
import AboutImg from "../../assets/navBar/about-us-min.jpg";
import BlogImg from "../../assets/navBar/blogs-min.jpg";
import ContactImg from "../../assets/navBar/contact-min.jpg";
import HomeImg from "../../assets/navBar/home-min.jpg";
import ServiceImg from "../../assets/navBar/services-min.jpg";
import LearningImg from "../../assets/navBar/learning-min.jpg";
import WorksImg from "../../assets/navBar/works-min.jpg";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";
import WorkIcon from "@material-ui/icons/Work";
import ContactsIcon from "@material-ui/icons/Contacts";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 55) {
      $(".navBarSection").addClass("navBarSectionBg");
    } else {
      $(".navBarSection").removeClass("navBarSectionBg");
    }
  });

  function changeBackground(e) {
    $(".img-1").show();
    // $(".img-1").animate({ display: "block" }, 2500);
    $(".img-2").hide();
    $(".img-3").hide();
    $(".img-4").hide();
    $(".img-5").hide();
    $(".img-6").hide();
    $(".img-7").hide();
  }
  function changeServiceBackground() {
    $(".img-1").hide();
    $(".img-2").show();
    $(".img-3").hide();
    $(".img-4").hide();
    $(".img-5").hide();
    $(".img-6").hide();
    $(".img-7").hide();
  }
  function changeWorksBackground() {
    $(".img-1").hide();
    $(".img-2").hide();
    $(".img-3").show();
    $(".img-4").hide();
    $(".img-5").hide();
    $(".img-6").hide();
    $(".img-7").hide();
  }
  function changeAboutBackground() {
    $(".img-1").hide();
    $(".img-2").hide();
    $(".img-3").hide();
    $(".img-4").show();
    $(".img-5").hide();
    $(".img-6").hide();
    $(".img-7").hide();
  }
  function changeBlogBackground() {
    $(".img-1").hide();
    $(".img-2").hide();
    $(".img-3").hide();
    $(".img-4").hide();
    $(".img-5").show();
    $(".img-6").hide();
    $(".img-7").hide();
  }
  function changeContactBackground() {
    $(".img-1").hide();
    $(".img-2").hide();
    $(".img-3").hide();
    $(".img-4").hide();
    $(".img-5").hide();
    $(".img-6").show();
    $(".img-7").hide();
  }
  function changeLearningBackground() {
    $(".img-1").hide();
    $(".img-2").hide();
    $(".img-3").hide();
    $(".img-4").hide();
    $(".img-5").hide();
    $(".img-6").hide();
    $(".img-7").show();
  }

  return (
    <section className="navBarSection">
      <div className="navBarSectionFlex container">
        <div className="navBarSectionChild">
          <div className="navBarSectionChildLogo">
            <Link to="/">
              <img src={Logo} alt="" />
              <span>Trapsi Bytes</span>
            </Link>
          </div>
        </div>
        <div className="navBarSectionChild">
          <div className="navBarSectionChildMenuFlex" onClick={handleOpen}>
            <div className="NavMenuTitle">Menu</div>
            <div>
              <div className="navBarSectionChildFlex">
                <div>
                  <div className="NavElement"></div>
                </div>
                <div>
                  <div className="NavElement"></div>
                </div>
                <div>
                  <div className="NavElement"></div>
                </div>
                <div>
                  <div className="NavElement"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="navBlkLayer"
        id={isOpen ? "active" : null}
        onClick={handleClose}
      ></div>
      <div className="NavLinksMain" id={isOpen ? "active" : null}>
        <div className="NavCloseIcon">
          <div onClick={handleClose}>✕</div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="NavLeftImages">
              <img src={HomeImg} alt="" className="img-1 img-fluid" />
              <img src={ServiceImg} alt="" className="img-2 img-fluid" />
              <img src={WorksImg} alt="" className="img-3 img-fluid" />
              <img src={AboutImg} alt="" className="img-4 img-fluid" />
              <img src={BlogImg} alt="" className="img-5 img-fluid" />
              <img src={ContactImg} alt="" className="img-6 img-fluid" />
              <img src={LearningImg} alt="" className="img-7 img-fluid" />
            </div>
          </div>
          <div className="col-md-6 NavMobHideM">
            <div>
              <ul>
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/"
                    onMouseOver={changeBackground}
                    onClick={handleClose}
                  >
                    Home
                  </NavLink>
                  <div></div>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    onMouseOver={changeServiceBackground}
                    onClick={handleClose}
                  >
                    Services
                  </NavLink>
                  <div></div>
                </li>
                <li>
                  <NavLink
                    to="/works"
                    onMouseOver={changeWorksBackground}
                    onClick={handleClose}
                  >
                    Works
                  </NavLink>
                  <div></div>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onMouseOver={changeBlogBackground}
                    onClick={handleClose}
                  >
                    About Us
                  </NavLink>
                  <div></div>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    onMouseOver={changeAboutBackground}
                    onClick={handleClose}
                  >
                    Blogs
                  </NavLink>
                  <div></div>
                </li>
                <li>
                  <NavLink
                    to="/learning"
                    onMouseOver={changeLearningBackground}
                    onClick={handleClose}
                  >
                    Learning
                  </NavLink>
                  <div></div>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onMouseOver={changeContactBackground}
                    onClick={handleClose}
                  >
                    Contact
                  </NavLink>
                  <div></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="NavMobAppDesgin">
        <div className="NavMobAppDesginFlex">
          <div>
            <NavLink to="/works">
              <div className="NavMobAppDesginMenus">
                <SettingsApplicationsIcon />
                <div className="small-m">Works</div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/service">
              <div className="NavMobAppDesginMenus">
                <WorkIcon />
                <div className="small-m">Services</div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink exact to="/" activeClassName="active">
              <div className="NavMobAppDesginMenus">
                <img src={Logo} alt="" width="24px" />
                <div className="small-m">Home</div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/about">
              <div className="NavMobAppDesginMenus">
                <CollectionsBookmarkIcon />
                <div className="small-m">About</div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/learning">
              <div className="NavMobAppDesginMenus">
                <ImportContactsIcon />
                <div className="small-m">Learning</div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact">
              <div className="NavMobAppDesginMenus">
                <ContactsIcon />
                <div className="small-m">Contact</div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
