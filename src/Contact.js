import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = (props) => {

    const form = useRef();

    const sendEmail = (e) => {

        console.log('inside sendemail')

        e.preventDefault();

        emailjs.sendForm('service_yqzmzho', 'template_2extsur', form.current, 'FfVMct-IXN05keTvg')
            .then((result) => {
                console.log(result.text);
                console.log('Email sent!')
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id='Contact'>
            <div className='contact-text'>
                <h1>Contact</h1>
            </div>
            <form ref={form} className='form' onSubmit={sendEmail}>
                <input type='text' name="from_name" placeholder='Name' value={props.name} onChange={e => props.setName(e.target.value)}></input>
                <input type='text' name="from_email" placeholder='Email' value={props.email} onChange={e => props.setEmail(e.target.value)}></input>
                <textarea className='textarea' name="message" maxLength={2000} value={props.message} onChange={e => props.setMessage(e.target.value)}></textarea>
                <input type="submit" value="Send"></input>
            </form>
        </section>
    )
}

export default Contact