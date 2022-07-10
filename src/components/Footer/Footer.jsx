import React, { memo } from 'react';
import Background from '../img/wave-haikei (2).png';
import { Facebook } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footerparent">
        <div className="footeradult">
            <img src={Background} alt='' />
            <div className="social">
                <Facebook />
                <GitHub />
                <Twitter />
            </div>
        </div>
    </div>
  )
}

export default memo(Footer);