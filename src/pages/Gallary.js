import React from "react";
import NavBar from "../components/NavBar";
import GallaryPhoto from "../components/GallaryPhoto";
import GallaryHero from "../components/GallaryHero";

const Gallary = () => {
  return (
    <>
      <NavBar />
      <GallaryHero/>
      <GallaryPhoto/>
    </>
  );
};

export default Gallary;
