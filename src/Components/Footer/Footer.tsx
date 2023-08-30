import React from 'react';
import './index.scss'
import logo from '../../Assets/Images/varha_logo_white.webp';

function Footer (): JSX.Element {
    return (
        <footer className='footer'>
            <div className='-image'>
                <img alt='Varhan logo' height={80} src={logo} />
            </div>
            <div className='-info'>
                <p>
                    © Varha 2023
                </p>
                <a href='/'>
                    Saavutettavuusseloste
                </a>
                <a href='/'>
                    Tietosuojaseloste
                </a>
                <a href='/'>
                    Evästeasetukset
                </a>
            </div>
        </footer>
    );
}

export default Footer;
