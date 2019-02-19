import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    // if (isSignedIn){
        return(
            <nav>
                <p className='dim link underline f3 pointer' onClick={() => onRouteChange('signIn')}>Sign Out</p>
            </nav>
        );
    // } else {
        // return(
        //     <nav>
        //         <p className='dim link underline f3 pointer' onClick={() => onRouteChange('register')}>Register</p>
        //     </nav>
        // );
    }

export default Navigation;