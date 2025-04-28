import React from "react";
import Navbar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import RecentReleases from "../components/RecentReleases/RecentReleases";
import MissionVision from "../components/MissionVision/MissionVision";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return React.createElement(
    "div",
    { className: "home-page" },
    React.createElement(Navbar, null),
    React.createElement(HeroSection, null),
    React.createElement(RecentReleases, null),
    React.createElement(MissionVision, null),
    React.createElement(Footer, null)
  );
};

export default Home;
