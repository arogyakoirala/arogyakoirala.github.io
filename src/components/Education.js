
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
  return(<div className="p-3 " >
    
    <div className="row " >

    <div  className="col-md-8 work pt-5">
     
     <span  style={{textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 700}}>Education</span >
        <br/>
        <Timeline align="left">

       {data.map((d)=> {
         return (
          <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" >
              <div>
            <img
            src={d.logo}
            width="40px"
            height="40px"
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

            <p style={{ margin:0, marginTop: "15px"}}>{d.school}</p>
            <p style={{fontSize: '1.1rem', margin: 0}}>{d.degree}</p> 
            <p className="mt-0" style={{fontSize: '0.9rem', margin: 0}}>{d.location} • {d.date}</p>
            
            {/* <p className="mt-0" style={{fontSize: '0.9rem', margin: 0}}>{d.description}</p> */}
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
      </div>)
  // return (
  //   <div className="row " >

  //   <div  className="col-md-8 work pt-5">
     
  //    <span  style={{textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 700}}>EDUCATION</span >
  //       <br/>
  //      {data.map((d)=> {
  //        return (
  //         <>
  //        <div className='row'>
  //           <div className="col-md-1 pr-0">
  //             <img
  //           src={d.logo}
  //           width='50px'
  //           // height='50px'
  //           // className="img-fluid"
  //           style={{
  //             paddingTop: "10px",
  //             paddingBottom: "10px",
              
  //             opacity: 1,
  //             // borderBottom: "3px solid red",
  //           }}
  //         />
  //           </div>
  //           <div className="col-md-8 ml-4 pl-0">
  //             <p style={{paddingTop: "10px", marginBottom:0}}>{d.school}</p>
  //             <p style={{fontSize: '1rem'}}>{d.degree}</p> 
  //             <p style={{fontSize: '1.1rem'}}>{d.description}</p>
  //           </div>
           
  //         </div>
  //           </>
  //        )
  //       })}

  //   </div>

  //   {/* <div  className="col-md-5 work pt-5">
  //    <img src="https://datartathon.com/assets/images/datartathon/arogya2.jpeg" className="img-fluid"/>
  //     </div> */}
          
  //     </div>
  // );
}

Education.propTypes = {

};

export default Education;
