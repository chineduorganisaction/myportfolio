import { memo } from "react";
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolioparent'>
        <div className="portfolioadult">
            <div className="portfoliochild reveal">
                <div className="r-portfolio">
                    <h1>OPEN TO HIRING<br/> ON ANY PROJECT.</h1>
                    <a href='../CV_2022-06-09-075429.pdf' target='_blank' download>
                        <button>Download CV</button>
                    </a>
                </div>

                <div className="l-portfolio">
                    <div className="l-portfoliochild">
                        <div className="platform">
                        Designer
                        </div>
                        <div className="platform">
                        Developer
                        </div>
                        <div className="platform">
                        Designer
                        </div>
                        <div className="platform">
                        Developer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Portfolio)