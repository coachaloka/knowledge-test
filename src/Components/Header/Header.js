import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <div></div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Statistics</Link>
                    <Link to='/'>Blog</Link>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;