import React from 'react';
import './Header.css'

const Header = function(propertie) {
    return ( 
        <div className = 'header' >
            {propertie.heading}
        </div>
    )
}
export default Header;