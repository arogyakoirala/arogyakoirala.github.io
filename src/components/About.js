/**
 *
 * About
 *
 */

import React from "react";
import PropTypes from "prop-types";

function About({ background, textColor }) {
  return (
    <div className="row ">
      <div className="col-md-8 about pt-3">
        <span
          style={{
            textTransform: "uppercase",
            fontSize: "0.9rem",
            fontWeight: 700,
          }}
        >
          ABOUT
        </span>

        <br />

        <p className="m-0 mt-2 pb-0">
          I am an information professional currently pursuing the Master of
          Information Management and Systems (MIMS) program at UC Berkeley
          School of Information, where I'm focusing on gaining skills in
          research methods (qualitative and quantitative), machine learning, big
          data technologies, and data for development. Prior to coming to
          Berkeley, I served as the Tech and Innovation Lead for{" "}
          <a href="https://kathmandulivinglabs.org"> Kathmandu Living Labs.</a>
        </p>
        <br />

        <p>
          I'm interested in understanding how technology and data can help
          address the problems faced by the world's disadvantaged populations. I
          have 7+ years of experience in designing and developing data-driven
          web and mobile applications aimed at disaster risk reduction, good
          governance, civic engagement, government transparency and
          accountability, and open data. I have a proven track record of working
          across different information-related roles (tech lead, UX researcher,
          data scientist, full-stack developer, manager) with a wide variety of
          clients (government agencies, academia, fortune 500 companies, civil
          society organizations, youth groups) in different parts of the world
          (Nepal, India and the US).
        </p>
      </div>

      {/* <div  className="col-md-4  about pt-5"> */}
      <div
        className="hideInSmall"
        style={{
          position: "absolute",
          top: "50px",
          maxWidth: "125px",
          left: "8.5%",
        }}
      >
        <img
          src="https://raw.githubusercontent.com/arogyakoirala/bucket/master/20210901_ISchoolPortraits_bhs_061.jpeg"
          className="img-fluid"
          style={{
            borderRadius: "10px",
            borderBottomLeftRadius: "10px",
            opacity: 1,
            // borderBottom: "3px solid red",
          }}
        />
      </div>
    </div>
  );
}

About.propTypes = {};

export default About;
