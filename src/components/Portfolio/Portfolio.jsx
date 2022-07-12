import { memo } from "react";
import React from 'react';
import './Portfolio.css';
import Reactjs from '../img/react-seeklogo.com.svg';
import Nodejs from '../img/nodejs-seeklogo.com.svg';
import Python from '../img/python-seeklogo.com.svg';
import Mongodb from '../img/mongodb-seeklogo.com.svg';

const Portfolio = () => {
  return (
    <div className='portfolioparent' id="Portfolio">
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
                            <img src={Nodejs} alt='' />
                        </div>
                        <div className="platform">
                            <img src={Mongodb} alt='' />
                        </div>
                        <div className="platform">
                            <img src={Reactjs} alt='' />
                        </div>
                        <div className="platform">
                            <img src={Python} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Portfolio)