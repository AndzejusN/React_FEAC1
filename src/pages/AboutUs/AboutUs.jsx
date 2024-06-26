import "./AboutUs.scss";

import React from "react";
import MainLayout from "@/layout/MainLayout.jsx";


const AboutUs = () => {
  return (
    <MainLayout>
      <div className="spacer"></div>
      <div className="about-us">
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">About Us</h1>
            <p className="hero-subtitle">
              Learn more about our company and values
            </p>
          </div>
        </section>

        <section className="mission">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver exceptional services and solutions to
              our clients, fostering innovation and excellence in every aspect
              of our business.
            </p>
          </div>
        </section>

        <section className="values">
          <div className="container">
            <h2>Our Values</h2>
            <div className="values-list">
              <div className="value-item">
                <h3>Integrity</h3>
                <p>
                  We uphold the highest standards of integrity in all of our
                  actions.
                </p>
              </div>
              <div className="value-item">
                <h3>Commitment</h3>
                <p>
                  We are committed to delivering top-quality services to our
                  clients.
                </p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>
                  We embrace innovation and strive to incorporate it into our
                  work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="container">
            <h2>Meet the Team</h2>
            <div className="team-members">
              <div className="team-member">
                <h3>Jane Doe</h3>
                <p>CEO</p>
              </div>
              <div className="team-member">
                <h3>John Smith</h3>
                <p>CTO</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
