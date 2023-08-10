import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./pages/Main";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import toggle from '../styles/imgs/toggle.png';
import "../styles/Container.css";

export default function Container() {
    
    const [currentPage, setCurrentPage] = useState('Main');
    const [notifFailState, setNotifFailState] = useState(false);
    const [notifSuccessState, setNotifSuccessState] = useState(false);
    const [notifState, setNotifState] = useState(false);
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {

            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handler);

    });

    const renderPage = () => {

        if (currentPage === 'PrivacyPolicy') {
            return <PrivacyPolicy />
        }
        return <Main handleFailState={handleFailState} handleSuccessState={handleSuccessState} />

    };

    const handlePageChange = (page) => setCurrentPage(page);

    const handleFailState = (failState) => {

        setNotifFailState(failState);
        console.log(failState);
        handleNotifState();
    };

    const handleSuccessState = (successState) => {
        
        setNotifSuccessState(successState);
        console.log(successState);
        handleNotifState();
    };

    const handleNotifState = () => {

        console.log('why??');
        console.log(notifFailState);
        console.log(notifSuccessState);

        if (notifFailState || notifSuccessState) {
            
            setNotifState(true);
            console.log(notifState)
            return;
        };
        setNotifState(false);
    };

    return (
        <div className={`body ${notifState ? "dialog" : ""}`}>
            <div className="total-header">
                <Header />
                <div className='nav-drop-down' ref={menuRef}>
                    <div className='drop-trigger'>
                        <img src={toggle} alt='Toggle menu button.' onClick={() => {
                            setOpen(!open)
                        }} />
                    </div>

                    <div className={`drop-menu ${open? 'active' : 'inactive'}` }>
                        <li id='contact-drop-menu'>
                            <a href='#contact' onClick={() => {
                            setOpen(false)
                            }}>
                                CONTACT
                            </a>
                        </li>
                        <li id='about-us-drop-menu'>
                            <a href='#about-us' onClick={() => {
                            setOpen(false)
                            }}>
                                ABOUT US
                            </a>
                        </li>
                        <li id='how-it-works-drop-menu'>
                            <a href='#how-it-works' onClick={() => {
                            setOpen(false)
                            }}>
                                HOW IT WORKS
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            
            <div className="main-page">
                {renderPage()}
            </div>
            <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
};