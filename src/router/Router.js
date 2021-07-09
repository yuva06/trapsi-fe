import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/about/about";
import Blog from "../components/blog/blog";
import Contact from "../components/contact/contact";
import HeroSection from "../components/heroSection/HeroSection";
import FullStack from "../components/Learning/FullStack/FullStack";
import LearningPage from "../components/Learning/LearningPage";
import LearningUIUX from "../components/Learning/UIUX/UIUX";
import ServiceSection from "../components/serviceSection/serviceSection";
import WorksSection from "../components/works/worksSection";
import Blogview from "../components/blog/Blogview";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HeroSection} />
      <Route exact path="/service" component={ServiceSection} />
      <Route exact path="/works" component={WorksSection} />
      <Route exact path="/about" component={About} />
      <Route exace path="/contact" component={Contact} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:id" component={Blogview} />
      <Route exact path="/learning" component={LearningPage} />
      <Route exact path="/learning/ui-ux" component={LearningUIUX} />
      <Route exact path="/learning/full-stack-dev" component={FullStack} />
    </Switch>
  );
};

export default Router;
