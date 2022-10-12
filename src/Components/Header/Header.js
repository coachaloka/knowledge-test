import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className='head'>
            <nav>
                <div className='logo'>
                <NavLink to='/'>Knowledge<span>Test</span></NavLink>
                </div>
                <div className='header'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;