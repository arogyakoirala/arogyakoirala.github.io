
/**
 *
 * About
 *
 */

import React from 'react';
import PropTypes from 'prop-types';


function About({background, textColor}) {
  return (
    <div className="row " >


    <div  className="col-md-7 about pt-3">
               I am an information systems designer from Nepal with 7+ years of experience in data science and application design and development (web and mobile). Currently, I am a <a href="https://www.ischool.berkeley.edu/programs/mims">graduate student</a> at the UC Berkeley School of Information. Additionally, I also work as Graduate Student Researcher, contributing my skills as a Data Visualization Developer for the Graduate Division.  
               <br/>
               <br/>
               Prior to my move to the US, I worked as the Tech and Innovation Lead at <b><a href="http://kathmandulivinglabs.org">Kathmandu Living Labs</a></b>, where I designed and developed technology tools aimed at promoting and supporting the use of data in government, civil society, and the private sector. 
    </div>

    {/* <div  className="col-md-5 about pt-5">
     <img src="https://datartathon.com/assets/images/datartathon/arogya2.jpeg" className="img-fluid"/>
      </div> */}

                
      </div>
  );
}

About.propTypes = {

};

export default About;
