import React from "react";
import { ReactComponent as ContactUs } from "../../styles/imgs/contact-us.svg";
import { ReactComponent as WeContactYou } from "../../styles/imgs/we-contact-you.svg";
import { ReactComponent as TheOffer } from "../../styles/imgs/the-offer.svg";
import { ReactComponent as Closing } from "../../styles/imgs/closing.svg";
import Contact from "../Contact";
import "../../styles/Main.css";

export default function Main({ handleFailState, handleSuccessState, notifState }) {

    return (
        <main className="main-home">
            <section className="home-top" id="home">
                <div className="transparent">
                    <h1 id="top-title">
                        QUICKLY SELL YOUR PROPERTY FOR CASH
                    </h1>
                    <h2 id="top-subtitle">
                        FAST, EASY, AS IS.
                    </h2>
                    <div id="contact" className="contact-full">
                        <Contact handleFailState={handleFailState} handleSuccessState={handleSuccessState} notifState={notifState} />
                    </div>
                    
                    <section className="bullet-list-flex">
                        <div className="white-box" id="bullet-list">
                            <ul>
                                <li id="buy-houses">
                                    WE BUY HOUSES IN WASHINGTON STATE
                                </li>

                                <li id="zero-fees">
                                    ZERO FEES & ZERO CLOSING COSTS
                                </li>

                                <li id="close-within">
                                    CLOSE WITHIN 30 DAYS
                                </li>

                                <li id="guaranteed">
                                    GUARANTEED OFFER
                                </li>

                                <li id="as-is">
                                    "AS IS" — NO REPAIRS ARE NEEDED
                                </li>

                                <li id="no-showings">
                                    NO SHOWINGS OR ENDLESS WALKTHROUGHS
                                </li>

                                <li id="no-appraisals">
                                    NO APPRAISALS OR APPROVAL DELAYS
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                </div>
                
            </section>

            <section id="about-us">
                <h1>
                    ABOUT US
                </h1>

                <div className="about">
                    <div className="people" id="skyler">
                        <img src="#" alt="Skyler Kay" />

                        <div className="side-text-about">
                            <h2>
                                SKYLER KAY
                            </h2>
                            <p>
                                Skyler Kay brings extensive knowledge in home insurance, personal banking, and finance management to the table, ensuring a comprehensive approach to real estate investment. When you're ready to sell your property, rest assured that Skyler will skillfully guide you through the process, insuring a smooth selling experience and maximizing the cash value of your home, as is.
                            </p>
                        </div>
                    </div>

                    <div className="people" id="tony">
                        <img src="#" alt="Tony Lukas" />

                        <div className="side-text-about">
                            <h2>
                                TONY LUKAS
                            </h2>
                            <p id="second-about-p">
                                Tony Lukas is a skilled real estate investor with expertise in mortgages and has been a valuable contributor to the industry since 2018. Relocating from Chicago to Washington in 2019, he's driven by a passion for helping clients achieve homeownership dreams. With commitment and keen investment acumen, he flourishes in the Pacific Northwest's dynamic real estate scene.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works">
                <div className="transparent">
                    <div className="how-it-flex">
                        <section className="white-box" id="how-it-box">
                            <h1>
                                HOW IT WORKS
                            </h1>

                            <div className="work-steps">
                                <div className="step-boxes" id="contact-step">
                                    <ContactUs />
                                    <h2>
                                        CONTACT US
                                    </h2>

                                    <p>
                                        Tell us about your property.
                                    </p>
                                </div>

                                <div className="step-boxes" id="we-contact-step">
                                    <WeContactYou />
                                    <h2>
                                        WE CONTACT YOU
                                    </h2>

                                    <p>
                                        If your property meets our buying criteria, we'll contact you to schedule a quick phone call.
                                    </p>
                                </div>

                                <div className="step-boxes" id="the-offer-step">
                                    <TheOffer />

                                    <h2>
                                        THE OFFER
                                    </h2>

                                    <p>
                                        We'll present a no-obligation offer to you within 24 hours.
                                    </p>
                                </div>

                                <div className="step-boxes" id="closing-step">
                                    <Closing />

                                    <h2>
                                        CLOSING
                                    </h2>

                                    <p>
                                        We'll close with a local, trusted title company within 21-30 days.
                                    </p>
                                </div>
                                
                            </div>
                        </section>
                    </div>
                    
                    <div className="selling-home-flex">
                        <section className="white-box" id="selling-your-home">
                            <h2>
                                SELLING YOUR HOME CAN BE A QUICK AND EASY PROCESS
                            </h2>

                            <div className="flex-paragraph">
                                <p className="top-para">
                                    ST Elite Acquisitions specializes in purchasing houses throughout Washington directly from homeowners. Unlike traditional real estate agents who list properties, we are the direct buyers, offering cash payments that allow for quick and flexible closing timelines, tailored to your preferences.
                                </p>
                                <p className="bottom-para">  
                                    Working with us means no fees or commissions, which are typically associated with listing a house with an agent. You won't have to deal with extra costs or come out of pocket to sell your home promptly. 
                                    Plus, there's no need to worry about preparing your property for sale, as we are willing to buy it in its current condition, whether it's in need of repair or not, and regardless of its location. We believe in hassle-free transactions, ensuring you can sell your house fast without the burden of additional expenses or home improvements.
                                </p>
                            </div>

                        </section>
                    </div>
                    

                    <div id="contact-2" className="contact-full">
                        <Contact handleFailState={handleFailState} handleSuccessState={handleSuccessState} notifState={notifState} />
                    </div>
                </div>
                             
            </section>
        </main>
    );
};