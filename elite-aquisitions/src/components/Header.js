import React from 'react';
import logo from '../styles/imgs/STEA_1500px.png';

import '../styles/Header.css';

export default function Header() {

    return (
        <header>
            <img className='logo' id='header-logo' src={logo} alt='Logo for ST Elite Acquisitions' />

            <nav className='nav-bar'>
                <ul className='nav-options'>
                    <li id='contact'>
                        <a href='#contact'>
                            CONTACT
                        </a>
                    </li>
                    <li id='about-us'>
                        <a href='#about-us'>
                            ABOUT US
                        </a>
                    </li>
                    <li id='how-it-works'>
                        <a href='#how-it-works'>
                            HOW IT WORKS
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};