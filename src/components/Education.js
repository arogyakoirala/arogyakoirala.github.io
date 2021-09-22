
/**
 *
 * Education
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



function Education({background, textColor, data}) {
  return (
    <div className="row " >

    <div  className="col-md-8 work pt-5">
     
     <span  style={{textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 700}}>EDUCATION</span >
        <br/>
       {data.map((d)=> {
         return (
         <>
            <h3 style={{marginTop: "10px"}}>{d.school}</h3> 
            <p>{d.date}</p> 
            <p style={{fontSize: '1.1rem'}}>{d.description}</p>
           
           
            </>
         )
        })}

    </div>

    {/* <div  className="col-md-5 work pt-5">
     <img src="https://datartathon.com/assets/images/datartathon/arogya2.jpeg" className="img-fluid"/>
      </div> */}
          
      </div>
  );
}

Education.propTypes = {

};

export default Education;
