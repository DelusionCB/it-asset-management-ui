import React from 'react';
import './index.scss'
import logo from '../../Assets/Images/varha_logo_white.webp';

function Footer (): JSX.Element {
    return (
        <footer className='footer'>
            <img alt='Varhan logo' height={80} src={logo} />
        </footer>
    );
}

export default Footer;
