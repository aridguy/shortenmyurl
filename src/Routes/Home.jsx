import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Assets/illustration-working.svg";
import ShortenLink from "../Sections/ShortenLink";
import Statistics from "../Sections/Statistics";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="home-hero mt-5">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6">
              <div>
                <h1 className="display-1 fw-bolder black">
                  More than just <br /> shorter links
                </h1>
                <p className="display-8 text-muted hero-extra-font">
                  Build your brand's recognition and get detailed <br />{" "}
                  insights on how your links are performing
                </p>
              </div>
              <div className="mt-5">
              <button className="border-0 btn btn-secondary btn-rounded btn-lg">Get Started</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <img width="100%" src={Hero} alt="hero_image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShortenLink />
      <Statistics />
    </div>
  );
};

export default Home;
