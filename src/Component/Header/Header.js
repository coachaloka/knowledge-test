import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className='flex'>
            <div className='logo'>
                <NavLink to ='/'>Kowledge<span>Test</span></NavLink>
            </div>
            <div className='header'>
                    <NavLink to ='/'>Home</NavLink>
                    <NavLink to ='/statistics'>Statistics</NavLink>
                    <NavLink to ='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;