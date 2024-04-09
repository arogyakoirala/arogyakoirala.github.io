import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

// import logo from './logo.png';
import { Link as NavbarLink } from 'react-router-dom';
// import NavbarContainer from './NavbarContainer';

function NavigationView(props) {

  return (
    <>
      <div
        className="row "
        style={{
          margin: 0,
          borderTop: '20px solid #8C1515',

        }}
      >
        <div className="col-md-12 py-5">
          <nav
            style={{
              backgroundColor: props.background
                ? props.background
                : 'rgba(0,0,0,0)',
              backgroundImage: props.texture
                ? 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")'
                : 'none',
              backgroundRepeat: props.texture ? 'space' : 'no-repeat',
              margin: '0px auto',
              fontWeight: 400,

              display: 'flex',
            }}
            className={
              props.fixed
                ? 'navbar navbar-expand-lg navbar-dark fixed-top p-0'
                : 'navbar navbar-expand-lg navbar-dark  p-0'
            }
          >
            <div className="container" style={{ maxWidth: '900px',  }}>
              <NavbarLink
                className="navbar-brand d-flex align-items-center"
                to="/"
              >

                <div>
                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      letterSpacing: '0.1rem',
                        textTransform: 'uppercase',
                      color: props.textColor
                        ? props.textColor
                        : 'rgba(80,80,80,1)',
                        display: 'inline-block',
                        paddingRight: '20px',
                    }}
                  >
                    Arogya Koirala
                  </div>

 
                </div>
              </NavbarLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              
            </div>
          </nav>
          {/* </NavbarContainer> */}
        </div>
      </div>
      {props.children}
    </>
  );
}

NavigationView.propTypes = {
  // authDetails: PropTypes.object,
  children: PropTypes.object,
  background: PropTypes.string,
  textColor: PropTypes.string,
  texture: PropTypes.bool,
  logoAbove: PropTypes.bool,
};

export default NavigationView;
