import React, {memo} from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experienceparent">
            <div className="experienceadult reveal">
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
      )
}

export default memo(Experience);