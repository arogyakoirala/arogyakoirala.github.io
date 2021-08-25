
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
               I am an information systems designer from Nepal. Currently, I am pursuing my graduate studies at the UC Berkeley School of Information. Additionally, I am also a Graduate Student Researcher at Cal, working as a Data Visualization Developer for the Graduate Division at UC Berkeley.  
               <br/>
               <br/>
               Before my move to the US, I worked as the Tech and Innovation Lead at <b><a href="http://kathmandulivinglabs.org">Kathmandu Living Labs</a></b>, where I designed and developed technology tools aimed at promoting and supporting the use of data in government, civil society, and the private sector. 
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
