
/**
 *
 * About
 *
 */

import React from 'react';
import PropTypes from 'prop-types';


function About({ background, textColor }) {
  return (
    <div className="row " >



      <div className="col-md-8 about pt-3"  >
        <span style={{ textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 700 }}>ABOUT</span >
     
        <br/>

        <p className="m-0 mt-2 pb-0">I am an information professional currently pursuing the Master of Information Management and Systems (MIMS) program at UC Berkeley School of Information. I have seven years of experience in designing and developing data-driven, web and mobile based information systems for corporations, government agencies, and civil-society organizations in the US, India, and Nepal. My work so far has centered around the design and development of systems that generate (or ingest), analyze, and visualize complex data.</p>

        <br />

        Prior to Berkeley, I was the Tech and Innovation Lead of <a href="https://kathmandulivinglabs.org">Kathmandu Living Labs</a> (KLL), where I led the design and development of numerous web and mobile development projects in areas such as disaster risk reduction, citizen science, good governance, and open data. In 2020, I led the design, development, and testing of Baato, Nepal’s first cloud based geospatial services company. Before KLL, I was a Decision Scientist for Mu Sigma Inc, where I worked on data analytics projects with numerous Fortune 500 companies in the banking, technology, and retail domains.

        <br />
        <br />

        My passion lies at the intersection of data, people, and systems. I am currently seeking summer internship opportunities in data science, user research, or product design. I prefer to work with companies that have a strong emphasis on learning, mentorship and teamwork.

        <br/>
        <br/>

        <a class="resume-links" href="https://github.com/arogyakoirala/bucket/raw/master/AK_Resume_Sep212021.pdf" target="_blank" style={{fontSize: "1.1rem"}}>View Resume</a>
       
      </div>


      {/* <div  className="col-md-4  about pt-5"> */}
      <div className="hideInSmall" style={{position: "absolute", top:"0px", maxWidth:"300px", right: "15%"}}>
     <img src="https://raw.githubusercontent.com/arogyakoirala/bucket/master/20210901_ISchoolPortraits_bhs_061.jpeg"  className="img-fluid" style={{borderBottomRightRadius: "20px"}}/>
      </div>


    </div>
  );
}

About.propTypes = {

};

export default About;
