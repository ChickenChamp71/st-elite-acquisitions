import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import '../styles/Contact.css';

export default function Contact({ handleFailState, handleSuccessState }) {

    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [recieve, setRecieve] = useState(false);
    const [addressErr, setAddressErr] = useState('');
    const [redAddress, setRedAddress] = useState(false);
    const [phoneErr, setPhoneErr] = useState('');
    const [redPhone, setRedPhone] = useState(false);
    const [emailErr, setEmailErr] = useState('');
    const [redEmail, setRedEmail] = useState(false);
    const [nameErr, setNameErr] = useState('');
    const [redName, setRedName] = useState(false);
    const [errTrue, setErr] = useState({
        address: true,
        phone: true,
        email: true,
        name: true
    })
    const [notifFail, isNotifFail] = useState(false);
    const [notifSuccess, isNotifSuccess] = useState(false);

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'address') {
            setAddress(inputValue);
        };

        if (inputType === 'phone') {
            setPhone(inputValue);
        };

        if (inputType === 'email') {
            setEmail(inputValue);
        };

        if (inputType === 'name') {
            setName(inputValue);
        };
    };

    const handleAddressErr = () => {
        if (address === '') {
            setAddressErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                address: true
            }));
            setRedAddress(true);
        } else {
            setAddressErr('');
            setErr(prevState => ({
                ...prevState,
                address: false
            }));
            setRedAddress(false);
        };
    };

    const handlePhoneErr = () => {
        if (phone === '') {
            setPhoneErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                phone: true
            }));
            setRedPhone(true);
        } else {
            setPhoneErr('');
            setErr(prevState => ({
                ...prevState,
                phone: false
            }));
            setRedPhone(false);
        };
    };

    const handleEmailErr = () => {
        if (email === '') {
            setEmailErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                email: true
            }));
            setRedEmail(true);
        } else if (!validateEmail(email)) {
            setEmailErr(`Please enter a valid email address.`);
            setErr(prevState => ({
                ...prevState,
                email: true
            }));
            setRedEmail(true);
        } else {
            setEmailErr('');
            setErr(prevState => ({
                ...prevState,
                email: false
            }));
            setRedEmail(false);
        };
    };

    const handleNameErr = () => {
        if (name === '') {
            setNameErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                name: true
            }));
            setRedName(true);
        } else {
            setNameErr('');
            setErr(prevState => ({
                ...prevState,
                name: false
            }));
            setRedName(false);
        };
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

        console.log('why are you running');

        if (!errTrue.address && !errTrue.phone && !errTrue.email && !errTrue.name) {

            setAddress('');
            setPhone('');
            setEmail('');
            setName('');
            setRecieve(false);

            setErr({
                address: true,
                phone: true,
                email: true,
                name: true
            });

            isNotifSuccess(true);
            handleSuccessState(notifSuccess);
            return;
        };

        isNotifFail(true);
        console.log(notifFail);
        handleFailState(notifFail);
    };

    const handleCheckboxChange = () => {
        setRecieve(!recieve);
    }

    return (
        <section className="contact-form-container">
            <div className="total-form">
                <form action="" method="post">
                    <div className="input-box-flex">
                        <input 
                            value={address} 
                            type="text" 
                            placeholder="PROPERTY ADDRESS" 
                            name="address"
                            onBlur={handleAddressErr}
                            onChange={handleInputChange}
                            className={`address-input input-border ${redAddress? 'red' : 'not-red'}`}
                        />
                        {addressErr && (
                            <div className="error-div" id="id-address-err">
                                <p className="error-text" id="address-err">{addressErr}</p>
                            </div>
                        )}

                        <input 
                            value={phone} 
                            type="text" 
                            placeholder="PHONE" 
                            name="phone"
                            onBlur={handlePhoneErr}
                            onChange={handleInputChange}
                            className={`phone-input input-border ${redPhone? 'red' : 'not-red'}`}
                        />
                        {phoneErr && (
                            <div className="error-div" id="id-phone-err">
                                <p className="error-text" id="phone-err">{phoneErr}</p>
                            </div>
                        )}

                        <input 
                            value={email} 
                            type="email" 
                            placeholder="EMAIL" 
                            name="email"
                            onBlur={handleEmailErr}
                            onChange={handleInputChange}
                            className={`email-input input-border ${redEmail? 'red' : 'not-red'}`}
                        />
                        {emailErr && (
                            <div className="error-div" id="id-email-err">
                                <p className="error-text" id="email-err">{emailErr}</p>
                            </div>
                        )}

                        <input 
                            value={name} 
                            type="text" 
                            placeholder="NAME" 
                            name="name" 
                            onBlur={handleNameErr}
                            onChange={handleInputChange}
                            className={`name-input input-border ${redName? 'red' : 'not-red'}`}
                        />
                        {nameErr && (
                            <div className="error-div" id="id-name-err">
                                <p className="error-text" id="name-err">{nameErr}</p>
                            </div>
                        )}

                        <div className="checkbox-div">
                            <input 
                                value={recieve}
                                type="checkbox" 
                                name="recieve" 
                                checked={recieve}
                                onChange={handleCheckboxChange}
                            />
                            <label className="for-checkbox">RECIEVE TEXT MESSAGES</label>
                        </div>
                    </div>

                    <div className="para-sub-box">
                        <p className="contact-form-p">By completing this form, you give consent to ST Elite Acquisitions to send SMS Text Messages. Standard message and data rates may apply.</p>

                        <button type="button" onClick={handleFormSubmit} className="submit-btn">SUBMIT</button>
                    </div>

                </form>

                <p className="contact-form-p" id="email-or-call">
                    Email or call us to get an expedited offer.
                </p>

                <h5 className="phone-number">
                    (669) 696-6969
                </h5>

                <h5 className="email-main">
                    EMAIL@STELITEACQUISITIONS.GOV
                </h5>
            </div>
            
            <dialog className={`notif-success ${notifSuccess? 'active' : 'inactive'}`}>
                <h2 className="dialog-text">
                    Information successfully submitted.
                </h2>

                <button onClick={() => {
                    isNotifSuccess(false);
                    handleSuccessState(notifSuccess);
                }} id="close-success" name="close-window" className="close-btn">CLOSE</button>
            </dialog>

            <dialog className={`notif-fail ${notifFail? 'active' : 'inactive' }`}>
                <h2 className="dialog-text">
                    Please try again.
                </h2>

                <button onClick={() => {
                    isNotifFail(false);
                    handleFailState(notifFail);
                }} id="close-fail" name="close-window" className="close-btn">CLOSE</button>
            </dialog>

        </section>
    );
};