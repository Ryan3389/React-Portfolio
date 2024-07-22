import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className='form-section'>
            <div className="form-container">
                <h1>Contact Me</h1>
                <p>Fill out the form below to connect</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="input-div">
                        <label>Name</label>
                        <input type="text" name="from_name" />
                    </div>
                    <div className="input-div">
                        <label>Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="input-div">
                        <label>Message</label>
                        <textarea name="message" />
                    </div>
                    <input type="submit" value="Send" className='send-btn' />
                </form>
            </div>
        </section>
    );
};

export default Contact