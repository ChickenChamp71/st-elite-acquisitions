import React from 'react';
import logo from '../styles/imgs/STEA_1500px.png';

import '../styles/Header.css';

export default function Header({ notifState }) {

    return (
        <header>
            <img className='logo' id='header-logo' src={logo} alt='Logo for ST Elite Acquisitions' />

            <nav className='nav-bar'>
                <ul className='nav-options'>
                    <li id='contact-top-links'>
                        <a href='#contact' className={`disabled-link ${notifState? "disabled" : ""}`}>
                            CONTACT
                        </a>
                    </li>
                    <li id='about-us-top-links'>
                        <a href='#about-us' className={`disabled-link ${notifState? "disabled" : ""}`}>
                            ABOUT US
                        </a>
                    </li>
                    <li id='how-it-top-links'>
                        <a href='#how-it-works' className={`disabled-link ${notifState? "disabled" : ""}`}>
                            HOW IT WORKS
                        </a>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
};