import React from "react";
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/NavBar";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";
import PageProgress from "react-page-progress";
import PreLoader from "./components/PreLoader/PreLoader";

function App() {
  return (
    <BrowserRouter>
      <PreLoader />
      <PageProgress color={"#d500f9"} height={5} />
      <ScrollToTop />
      <NavBar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
