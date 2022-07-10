import React, {memo} from 'react';
import './Intro.css';
import Wall from '../img/13038-01.png';
import GraphicEq from '@mui/icons-material/GraphicEq';
import LaptopMac from '@mui/icons-material/LaptopMac';

const Intro = () => {
  return (
    <div className='introparent'>
      <div className="introadult">
        <div className="introchild">
          <div className="r-intro">
            <h1>Hy, I AM NDIANEKWU <br/> CHINEDU WILLIAMS.</h1>
            <div className="introlist">
            <span>I  AM  A</span>
            <ul>
              <li>YouTuber</li>
              <li>Developer</li>
              <li>Designer</li>
              <li>Freelancer</li>
            </ul>
            </div>
          </div>

          <div className="l-intro">
            <div className="l-introchild">
              <div className="skills">
                <GraphicEq />
                Designer
              </div>
              <div className="skills">
                <LaptopMac />
                Developer
              </div>
              <div className="skills-image">
                <img src={Wall} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Intro);