import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import '../styles/Contact.css';

export default function Contact() {

    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [recieve, setRecieve] = useState(false);
    const [addressErr, setAddressErr] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [nameErr, setNameErr] = useState('');
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
        } else {
            setAddressErr('');
            setErr(prevState => ({
                ...prevState,
                address: false
            }));
        };
    };

    const handlePhoneErr = () => {
        if (phone === '') {
            setPhoneErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                phone: true
            }));
        } else {
            setPhoneErr('');
            setErr(prevState => ({
                ...prevState,
                phone: false
            }));
        };
    };

    const handleEmailErr = () => {
        if (email === '') {
            setEmailErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                email: true
            }));
        } else if (!validateEmail(email)) {
            setEmailErr(`Please enter a valid email address.`);
            setErr(prevState => ({
                ...prevState,
                email: true
            }));
        } else {
            setEmailErr('');
            setErr(prevState => ({
                ...prevState,
                email: false
            }));
        };
    };

    const handleNameErr = () => {
        if (name === '') {
            setNameErr(`This field cannot be empty.`);
            setErr(prevState => ({
                ...prevState,
                name: true
            }));
        } else {
            setNameErr('');
            setErr(prevState => ({
                ...prevState,
                name: false
            }));
        };
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

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
            return;
        };

        isNotifFail(true);
    };

    const handleCheckboxChange = () => {

        setRecieve(!recieve);
    }

    return (
        <section className="contact-form-container">
            <form action="" method="post">

                <input 
                    value={address} 
                    type="text" 
                    placeholder="PROPERTY ADDRESS" 
                    name="address"
                    onBlur={handleAddressErr}
                    onChange={handleInputChange}
                />
                {addressErr && (
                    <div>
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
                />
                {phoneErr && (
                    <div>
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
                />
                {emailErr && (
                    <div>
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
                />
                {nameErr && (
                    <div>
                        <p className="error-text" id="name-err">{nameErr}</p>
                    </div>
                )}

                <input 
                    value={recieve}
                    type="checkbox" 
                    name="recieve" 
                    checked={recieve}
                    onChange={handleCheckboxChange}
                />
                <label className="forCheckbox">RECIEVE TEXT MESSAGES</label>

                <p className="contactFormP">By completing this form, you give consent to ST Elite Acquisitions to send SMS Text Messages. Standard message and data rates may apply.</p>

                <button type="button" onClick={handleFormSubmit} className="submit-btn">Submit</button>
            </form>

            <p className="contactFormP">
                Email or call us to get an expedited offer.
            </p>

            <h5 className="phone-number">
                (669) 696-6969
            </h5>

            <h5 className="email-main">
                EMAIL@STELITEACQUISITIONS.GOV
            </h5>

            <dialog className={`notif-success ${notifSuccess? 'active' : 'inactive' }`}>
                <h2>
                    Information successfully submitted.
                </h2>

                <button onClick={() => isNotifSuccess(false)} id="close-success" name="close-window" className="close-btn">Close</button>
            </dialog>

            <dialog className={`notif-fail ${notifFail? 'active' : 'inactive' }`}>
                <h2>
                    Please try again.
                </h2>

                <button onClick={() => isNotifFail(false)} id="close-fail" name="close-window" className="close-btn">Close</button>
            </dialog>

        </section>
    );
};