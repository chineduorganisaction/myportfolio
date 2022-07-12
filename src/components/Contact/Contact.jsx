import React, { memo, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_szplaod', 'template_b9deyue', form.current, 'mY69c7oVe59LYHFax')
        .then(
            (result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            }
        )
    };

    return (
        <div className='contactparent' id='Contact'>
            <div className="contactadult">
                <div className="contactchild reveal">
                    <div className="r-contact">
                        <h1>GET IN-TOUCH <br/> CONTACT ME.</h1>
                    </div>
    
                    <div className="l-contact">
                        <div className="l-contactchild">
                            <form onSubmit={sendEmail} ref={form} >
                                <input type="text" name="user_name" id="" placeholder='Name' />
                                <input type="email" name="user_email" id="" placeholder='Email' />
                                <textarea name="message" id="" cols="30" rows="10" placeholder='Message Text Only' ></textarea>
                                <input type="submit" value="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default memo(Contact);