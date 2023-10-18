import React from "react";
import { Hero } from "./Hero";
import Category from "./Category";
import Banner from "./Banner";
import PopularMenu from "./PopularMenu";
import Contact from "./Contact";
import Menus from "./Menus";
import {Testimonials} from "./Testimonials";
import { Helmet } from "react-helmet";
import Recommed from "./Recommed";

const Home = () => {
  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Eater Ecommerce || Home</title>
      </Helmet>
      <div className="home">
        <Hero />
        <Category />
        <Banner />
        <PopularMenu />
        <Contact />
        <Menus />
        <Recommed />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
