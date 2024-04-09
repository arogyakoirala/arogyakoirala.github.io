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
      <div className="col-md-8 about pt-3" >
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
          I am a Machine Learning Engineer at the <a href="https://aide.stanford.edu">Stanford AIDE Lab</a>, where I develop and evaluate imaging and language based AI algorithms for clinical deployment.
        </p>

        <p className="m-0 mt-3 pb-0">I specialize in deep learning, full stack development, data visualization, and dev-ops.</p>
        
        

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
        {/* <img
          src="https://raw.githubusercontent.com/arogyakoirala/bucket/master/20210901_ISchoolPortraits_bhs_061.jpeg"
          className="img-fluid"
          style={{
            borderRadius: "10px",
            borderBottomLeftRadius: "10px",
            opacity: 1,
            // borderBottom: "3px solid red",
          }}
        /> */}
      </div>
    </div>
  );
}

About.propTypes = {};

export default About;
