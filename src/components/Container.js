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

                if (e.target.id === "trigger-target") {
                    return;
                }

                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };

    }, []);

    const renderPage = () => {

        if (currentPage === 'PrivacyPolicy') {
            return <PrivacyPolicy />
        }
        return <Main handleFailState={handleFailState} handleSuccessState={handleSuccessState} notifState={notifState} />

    };

    const handlePageChange = (page) => setCurrentPage(page);

    const handleFailState = (failState) => {

        setNotifFailState(failState);
        handleNotifState(notifSuccessState, failState);
    };

    const handleSuccessState = (successState) => {
        
        setNotifSuccessState(successState);
        handleNotifState(successState, notifFailState);
    };

    const handleNotifState = (success, fail) => {

        if (success || fail) {
            
            setNotifState(true);
            return;
        };
        setNotifState(false);
    };

    return (
        <div className='notif-div'>

            <dialog className={`notif-success ${notifSuccessState? 'active' : 'inactive'}`}>
                <h2 className="dialog-text">
                    Information successfully submitted.
                </h2>

                <button onClick={() => handleSuccessState(!notifSuccessState)} id="close-success" name="close-window" className="close-btn">CLOSE</button>
            </dialog>

            <dialog className={`notif-fail ${notifFailState? 'active' : 'inactive' }`}>
                <h2 className="dialog-text">
                    Please try again.
                </h2>

                <button onClick={() => handleFailState(!notifFailState)} id="close-fail" name="close-window" className="close-btn">CLOSE</button>
            </dialog>                
            
            <div className="total-header">

                <div className={`header-notif ${notifState? "dialog" : ""}`}>
                     <Header notifState={notifState} currentPage={currentPage} handlePageChange={handlePageChange} />
                     <div className='drop-trigger'>
                        <img id="trigger-target" src={toggle} alt='Toggle menu button.' onClick={() => setOpen(!open)} />
                    </div>
                </div>

                <div className='nav-drop-down' ref={menuRef}>

                    <div className={`drop-menu ${open? 'active' : 'inactive'} ${notifState? "dialog" : ""}` }>
                        <li id='contact-drop-menu'>
                            <a href='#contact' onClick={() => {
                                setOpen(false);
                                handlePageChange('Main')
                            }} className={`contact-href ${currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}`}>
                                CONTACT
                            </a>
                        </li>
                        <li id='about-us-drop-menu'>
                            <a href='#about-us' onClick={() => {
                                setOpen(false);
                                handlePageChange('Main');
                            }} className={`about-us-href ${currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}`}>
                                ABOUT US
                            </a>
                        </li>
                        <li id='how-it-works-drop-menu'>
                            <a href='#how-it-works' onClick={() => {
                                setOpen(false);
                                handlePageChange('Main');
                            }} className={`how-it-works-href ${currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}`}>
                                HOW IT WORKS
                            </a>
                        </li>
                    </div>
                </div>
            </div>

            <div className={`body ${notifState ? "dialog" : ""}`}>

                
                <div className="main-page">
                    {renderPage()}
                </div>
                <Footer currentPage={currentPage} handlePageChange={handlePageChange} notifState={notifState} />
            </div>
        </div>
        
    );
};