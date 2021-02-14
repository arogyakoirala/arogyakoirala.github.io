
/**
 *
 * NotJustCode
 *
 */

import React from 'react';
import PropTypes from 'prop-types';


function NotJustCode({background, textColor}) {
  return (
    <div className="row " >


    <div  className="col-md-7 about  py-5">
    <span  style={{textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700}}>Not Just code</span >
      <br/>
         I play the <a href="https://www.youtube.com/watch?v=nuz8_ewyBEg">guitar</a>, <a href="https://www.instagram.com/p/BgIcRE0F1Nl/">the tabla</a>, and sing. I ocassionally indulge myself in <a href="https://soundcloud.com/koiralaa/tracks">composing tunes</a>, and <a href="https://www.youtube.com/watch?v=6OEh26Hzk_I">performing on stage</a> with my sister.         
    </div>


    {/* <div  className="col-md-5 about pt-5">
     <img src="https://datartathon.com/assets/images/datartathon/arogya2.jpeg" className="img-fluid"/>
      </div> */}
          
      </div>
  );
}

NotJustCode.propTypes = {

};

export default NotJustCode;
