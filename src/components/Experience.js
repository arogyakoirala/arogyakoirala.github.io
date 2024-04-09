
/**
 *
 * Experience
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';



function Experience({background, textColor, data}) {
  return (
    <div className="p-0">

    <div className="row " >

    <div  className="col-md-8 work pt-5">
     
     <span  style={{textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 700}}>Experience</span >
        <br/>
        
      <p>I derive my sense of purpose and meaning through the work that I do. I've been fortunate enough to work with very inspiring people along the way.  </p>  
        <Timeline align="left">

       {data.map((d)=> {
         return (
          <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" >
              <div>
            <img
            src={d.logo}
            width="55px"
            height="55px"
            style={{
              // borderRadius: '30px'
              // borderBottom: "3px solid red",
            }}
          />
          </div>
              </TimelineDot>
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent>
            <div className="p-0">

            <p style={{ marginTop: "20px", paddingTop: 0}}>{d.organization}</p>
            <p style={{fontSize: '1.1rem', margin: 0}}>{d.role}</p> 
            
            <p className="mt-0" style={{fontSize: '0.9rem', margin: 0}}>{d.location} • {d.date}</p>
            {/* <ul style={{padding: 0, marginTop: '10px'}}> 
              {d.responsibilities.map((r)=> {return <li style={{fontSize: '1.0rem'}}>{r}</li>})}
            </ul> */}
           
            </div>
           
            </TimelineContent>
         </TimelineItem>)
        })}
        </Timeline>

    </div>

    {/* <div  className="col-md-5 work pt-5">
     <img src="https://datartathon.com/assets/images/datartathon/arogya2.jpeg" className="img-fluid"/>
      </div> */}
          
      </div>
      </div>
  );
}

Experience.propTypes = {

};

export default Experience;
