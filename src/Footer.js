import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css'
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='footer text-center p-3' style={{ backgroundColor: 'white' }}>
        Made by Seyoung Ree
      </div>
    </MDBFooter>
  );
}