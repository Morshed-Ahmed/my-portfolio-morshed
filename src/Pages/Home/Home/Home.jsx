import React from "react";
import Navbar from "../../Navbar/Navbar";
import Banner from "../Banner/Banner";
import SampleProjects from "../SampleProjects/SampleProjects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SampleProjects />
    </div>
  );
};

export default Home;
