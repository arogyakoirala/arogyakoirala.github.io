
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


    <div  className="col-md-7 about pt-5">
               I am an information systems designer from Nepal. I currently work as the Tech and Innovation Lead at <b><a href="https://kathmandulivinglabs.org">Kathmandu Living Labs</a></b>, where I design and develop technology tools aimed at promoting and supporting the use of data in government, civil society, and the private sector. 
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
