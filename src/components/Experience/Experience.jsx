import React, {memo} from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experienceparent" id='Experience'>
            <div className="experienceadult">
                <div className="experiencechild reveal">
                    <div className="r-experience">
                        <h1>EXPERIENCE</h1>
                    </div>
                    <div className="l-experience">
                        <div className="section">
                            <div className="circle">
                                3+yrs
                            </div>
                            <div className="title">
                                Skills Experience
                            </div>
                        </div>
                        <div className="section">
                            <div className="circle">
                                2+yrs
                            </div>
                            <div className="title">
                                Jobs Experience
                            </div>
                        </div>
                        <div className="section">
                            <div className="circle">
                                8+yrs
                            </div>
                            <div className="title">
                                Projects Experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default memo(Experience);