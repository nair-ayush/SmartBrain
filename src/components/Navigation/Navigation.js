import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, page }) => {
    if (page === 'home'){
        return(
            <nav>
                <p className='dim link underline f3 pointer' onClick={() => onRouteChange('signIn')}>Sign Out</p>
            </nav>
        );
    } else {
        if (page === 'signIn'){
            return(
                <nav>
                    <p className='dim link underline f3 pointer' onClick={() => onRouteChange('register')}>Register</p>
                </nav>
            );
        } else {
            return(
                <nav>
                    <p className='dim link underline f3 pointer' onClick={() => onRouteChange('signIn')}>Sign In</p>
                </nav> 
            );
        }
    }
}
export default Navigation;