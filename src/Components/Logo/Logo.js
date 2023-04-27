import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: '150px', width: '150px' }}>
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '25px'}} src={brain} alt="Brain"/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;