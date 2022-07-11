import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
      <div id="footer-container">
          <MDBFooter className='text-center text-lg-left' >
            <div className='footer text-center p-3'>
                <FontAwesomeIcon icon={faCopyright}/> Seyoung Ree 2022
            </div>
        </MDBFooter>
      </div>
    
  );
}