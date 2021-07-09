import React from "react";
import AboutImage from "../../assets/aboutSection/aboutImage.png";
import Plumes from "../../assets/aboutSection/plumes.png";
import ITBRF from "../../assets/aboutSection/itbrf.png";
import Nativelead from "../../assets/aboutSection/nativelead.png";
import EcoSouvnir from "../../assets/aboutSection/eco-souvnir.png";
import IMC from "../../assets/aboutSection/imc.png";
import MadeByThought from "../../assets/aboutSection/madebythought.png";
import Pepperlearn from "../../assets/aboutSection/pepperlearn.png";
import SanthaiFresh from "../../assets/aboutSection/santhai-fresh.png";
import SashwamLife from "../../assets/aboutSection/sashwam-life-school.png";
import SashwamSchool from "../../assets/aboutSection/sashwam-school.png";
import Varaivan from "../../assets/aboutSection/varaivan.png";
import WeightLoss from "../../assets/aboutSection/weight-loss.png";
import Grasp from "../../assets/aboutSection/grasp.png";
import AOS from "aos";

const About = () => {
  AOS.init({
    once: true,
    duration: 1200,
  });
  return (
    <main>
      <section className="AboutSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="h1-m">Who We Are ?</div>
              <div className="p-m" data-aos="fade-right">
                Trapsi Bytes outstands its brand with its young and vibrant
                team, which discharges an ever-glowing vibrance. No matter how
                far hard the level, we can frame out flawless strategies and
                enhance the possibility of digital transformations. It thrusts
                rapid scale-ups in the curves of transformation charts. Carving
                the best out of betterness!
              </div>
            </div>
            <div className="col-md-6 AboutSecImg">
              <img src={AboutImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="AboutClientSection">
        <div className="container">
          <div className="AboutClientSectionTitle h1-m">Our Clients</div>
          <div className="row">
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={Plumes} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={Nativelead} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={ITBRF} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={IMC} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={EcoSouvnir} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={MadeByThought} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={Pepperlearn} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={SanthaiFresh} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={SashwamLife} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={SashwamSchool} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={Varaivan} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={WeightLoss} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="AboutClientFlex">
                <img src={Grasp} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
