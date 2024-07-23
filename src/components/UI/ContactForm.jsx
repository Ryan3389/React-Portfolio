import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
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
                <h1>Lets Connect</h1>
                <p>Fill out the form below to get in touch</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="input-div">
                        <label>Name</label>
                        <input type="text" name="from_name" required />
                    </div>
                    <div className="input-div">
                        <label>Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="input-div">
                        <label>Message</label>
                        <textarea name="message" required />
                    </div>
                    <input type="submit" value="Send" className='send-btn' />
                </form>
            </div>
        </section>
    );
};

export default Contact
