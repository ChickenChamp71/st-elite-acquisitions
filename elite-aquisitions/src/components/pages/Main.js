import React from "react";
import { ReactComponent as ContactUs } from "../../styles/imgs/contact-us.svg";
import { ReactComponent as WeContactYou } from "../../styles/imgs/we-contact-you.svg";
import { ReactComponent as TheOffer } from "../../styles/imgs/the-offer.svg";
import { ReactComponent as Closing } from "../../styles/imgs/closing.svg";
import Contact from "../Contact";
import "../../styles/Main.css";

export default function Main() {
    return (
        <main className="main-home">
            <section className="home-top" id="home">
                <div className="transparent">
                    <h1>
                        QUICKLY SELL YOUR PROPERTY FOR CASH
                    </h1>
                    <h2>
                        FAST, EASY, AS IS.
                    </h2>
                    <div className="contact" id="contact">
                        <Contact />
                    </div>
                    
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
                                "AS IS" - NO REPAIRS ARE NEEDED
                            </li>

                            <li id="no-showings">
                                NO SHOWINGS OR ENDLESS WALKTHROUGHS
                            </li>

                            <li id="no-appraisals">
                                NO APPRAISALS OR APPROVAL DELAYS
                            </li>
                        </ul>
                    </div>
                </div>
                
            </section>

            <section className="about-us" id="about-us">
                <h1>
                    ABOUT US
                </h1>

                <div className="about">
                    <div className="people" id="skyler">
                        <img src="http://placekitten.com/375/497" alt="Skyler Kay, kitten rn" />

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
                        <img src="http://placekitten.com/375/497" alt="Skyler Kay, kitten rn" />

                        <div className="side-text-about">
                            <h2>
                                TONY LUKAS
                            </h2>
                            <p>
                                Tony Lukas is a skilled real estate investor with expertise in mortgages and has been a valuable contributor to the industry since 2018. Relocating from Chicago to Washington in 2019, he's driven by a passion for helping clients achieve homeownership dreams. With commitment and keen investment acumen, he flourishes in the Pacific Northwest's dynamic real estate scene.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-it-works" id="how-it-works">
                <section className="white-box" id="how-it-box">
                    <h1>
                        HOW IT WORKS
                    </h1>

                    <div className="work-steps">
                        <div id="contact-step">
                            <ContactUs />
                            <h2>
                                CONTACT US
                            </h2>

                            <p>
                                Tell us about your property.
                            </p>
                        </div>

                        <div id="we-contact-step">
                            <WeContactYou />
                            <h2>
                                WE CONTACT YOU
                            </h2>

                            <p>
                                If your property meets our buying criteria, we'll contact you to schedule a quick phone call.
                            </p>
                        </div>

                        <div id="the-offer-step">
                            <TheOffer />

                            <h2>
                                THE OFFER
                            </h2>

                            <p>
                                We'll present a no-obligation offer to you within 24 hours.
                            </p>
                        </div>

                        <div id="closing-step">
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

                <section className="white-box" id="selling-your-home">
                    <h2>
                        SELLING YOUR HOME CAN BE A QUICK AND EASY PROCESS
                    </h2>

                    <p>
                        ST Elite Acquisitions specializes in purchasing houses throughout Washington directly from homeowners. Unlike traditional real estate agents who list properties, we are the direct buyers, offering cash payments that allow for quick and flexible closing timelines, tailored to your preferences. Working with us means no fees or commissions, which are typically associated with listing a house with an agent. You won't have to deal with extra costs or come out of pocket to sell your home promptly. Plus, there's no need to worry about preparing your property for sale, as we are willing to buy it in its current condition, whether it's in need of repair or not, and regardless of its location. We believe in hassle-free transactions, ensuring you can sell your house fast without the burden of additional expenses or home improvements.
                    </p>

                </section>

                <div className="contact" id="contact-2">
                    <Contact />
                </div>                

            </section>
        </main>
    );
};