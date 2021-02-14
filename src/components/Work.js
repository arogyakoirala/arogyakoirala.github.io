
/**
 *
 * Work
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
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    autoplaySpeed: 3000,
  boxShadow: 'none',
  disableKeyboardControls: false,
  disablePanzoom: false,
  disableWheelControls: false,
  hideControlsAfter: false,
  lightboxTransitionSpeed: 0.3,
  lightboxTransitionTimingFunction: 'linear',
  overlayColor: 'rgba(30, 30, 30, 0.9)',
  slideAnimationType: 'fade',
  slideSpringValues: [300, 50],
  slideTransitionSpeed: 0.6,
  slideTransitionTimingFunction: 'linear',
  usingPreact: false
  },
  caption: {},
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
  iconColor: 'rgba(255, 255, 255, 0.8)',
  iconPadding: '10px',
  showAutoplayButton: false,
  showCloseButton: true,
  showDownloadButton: false,
  showFullscreenButton: false,
  showNextButton: false,
  showPrevButton: false,
  showThumbnailsButton: false,
  size: '40px'
  },
  thumbnails: {showThumbnails: false},
  progressBar:{},
}


function Work({background, textColor, data}) {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="row " >

    <div  className="col-md-8 work pt-5">
     
     <span  style={{textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700}}>Select work</span >
     <Timeline align="left">
       {data.map((d)=> {
         return (
          <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3>{d.name}</h3> 
            <p>{d.shortDesc}</p> 
            <p style={{fontSize: '1.1rem'}}>{d.role}</p>
            <SRLWrapper options={options}>

            {d.images.length > 0 && d.images.map((i)=>{return <a href={process.env.PUBLIC_URL + 'img/' + i}><img style={{marginRight: '1rem'}} src={process.env.PUBLIC_URL + 'img/thumbs/' + i.split(".")[0] + "_tn.jpg" } /></a>})}
            </SRLWrapper>
            <br/>
            {d.links.length > 0 && <span  style={{textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700}}>My work</span >}
            {d.links.map((l)=>{return <p style={{margin: 0}}><a className="project-links" href={l.url} style={{fontSize: '1.1rem'}}>{l.label}</a></p>})}
            <br/>


            {d.related.length > 0 &&  <span  style={{textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700}}>Related work (or) links</span >}
            {d.related.map((l)=>{return <p style={{margin: 0}}><a className="project-links" href={l.url} style={{fontSize: '1.1rem'}}>{l.label}</a></p>})}

            {d.related.length > 0 && <br/>}
     
            

            </TimelineContent>
          </TimelineItem>
         )
        })}
        </Timeline>

    </div>

    {/* <div  className="col-md-5 work pt-5">
     <img src="https://datartathon.com/assets/images/datartathon/arogya2.jpeg" className="img-fluid"/>
      </div> */}
          
      </div>
  );
}

Work.propTypes = {

};

export default Work;
