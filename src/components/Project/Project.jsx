import React, { memo } from 'react';
import './Project.css';

const Project = () => {
    return (
        <div className='projectparent'>
            <div className="projectadult">
                <div className="projectchild reveal">
                    <div className="r-project">
                        <h1>SKILLSET PROJECTS.</h1>
                    </div>
    
                    <div className="l-project">
                        <div className="l-projectchild">
                            <div className="card">
                                <p>DESIGNER</p>
                                <p>UI/UX</p>
                                <p>PHOTOSHOP</p>
                                <p>ADOBE<br/>ILLUSTRATOR</p>
                                <p>FIGMA</p>
                            </div>
                            <div className="card">
                                <p>DEVELOPER</p>
                                <p>MONGODB</p>
                                <p>VUE.JS</p>
                                <p>REACT.JS</p>
                                <p>MARIADB</p>
                            </div>
                            <div className="card">
                                <p>FREELANCER</p>
                                <p>YOUTUBER</p>
                                <p>ADS<br/>MARKETING</p>
                                <p>SOCIALS</p>
                                <p>BRANDING</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default memo(Project)