/**
 *
 * WrapperUtilityView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/dist/moment';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// background-image: url("https://www.transparenttextures.com/patterns/black-mamba.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function WrapperUtilityView({
  children,
  background,
  textColor,
  footer,
  texture,
  fold,
  height,
  maxWidth,
}) {
  return (
    <div
      style={{
        backgroundColor: background || 'rgba(0,0,0,0)',
        color: textColor || 'rgba(0,0,0,1)',
        backgroundImage: texture
          ? 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")'
          : 'none',
        backgroundRepeat: texture ? 'repeat' : 'no-repeat',
        marginBottom: fold ? '-150px' : '0px',
        paddingBottom: fold ? '150px' : '0px',
        height: height || 'null',
      }}
    >
      <div
        className="p-3"
        style={{
          maxWidth: maxWidth || '900px',
          margin: '0 auto',
        }}
      >
        {children}
      </div>
      {footer && (
        <div
          className="py-5 row m-0"
          style={{
            borderTop: textColor
              ? `1px solid rgba(255,255,255,0.2)`
              : '1px solid #e5e5e5',
            color: textColor || '#b3b3b3',
          }}
        >
          <div className="col-md-12  m-0">
            <div
              className="p-3"
              style={{
                maxWidth: maxWidth || '900px',
                margin: '0 auto',
                fontWeight: 300,
              }}
            >
              © {moment().year()} Anaconda Water Management Platform. All rights
              reserved <br />
              Developed by <b>Kathmandu Living Labs</b>
              <br />
              <br />
              <Link to="/tos" style={{ color: textColor || '#b3b3b3' }}>
                Terms of Service
              </Link>
              <br />
              <Link
                to="/privacy-policy"
                style={{ color: textColor || '#b3b3b3' }}
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

WrapperUtilityView.propTypes = {
  children: PropTypes.object,
  background: PropTypes.string,
  textColor: PropTypes.string,
  footer: PropTypes.bool,
  texture: PropTypes.bool,
  fold: PropTypes.bool,
};

export default WrapperUtilityView;
