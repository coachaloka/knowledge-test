import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='head'>
            
                <div className="logo">
                <NavLink to='/'>Knowledge<span>Test</span></NavLink>
                </div>
                <div className='header'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                </div> 
        </div>
    );
};

export default Header;