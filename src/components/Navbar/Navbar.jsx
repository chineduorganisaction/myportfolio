import React, { memo, useState } from 'react';
import { Menu } from '@mui/icons-material'
import "./Navbar.css";

const Navbar = () => {

    const nav_List = [
        'Home',
        'Portfolio',
        'Experience',
        'Project',
        'Contact'
    ];

    const [ state, setState ] = useState(false);
    const toggle = () => setState(!state)

    
  return (
    <div className='nav'>
        <div className="nav-bar">
            <div className="nav-right">WILLIAMS</div>
            <div className="nav-left">
                <div className="menu" onClick={toggle}><Menu /></div>
                {
                    state &&
                    <ul>
                    {
                        nav_List.map(
                            (value, index) => {
                                return <li key={index}>{value}</li>
                            }
                        )
                    }
                    </ul>
                }
                <ul className='toggle'>
                    {
                        nav_List.map(
                            (value, index) => {
                                return <li key={index}>{value}</li>
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default memo(Navbar);