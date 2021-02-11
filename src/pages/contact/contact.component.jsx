import React from 'react';

import './contact.styles.scss';
import {ReactComponent as Email} from '../../assets/email.svg';


const Contact = () => {

    const handleClick = () => {
        window.location.assign("mailto:hello@hypno.com");
    }

    return (
        <div className ='contact' onClick={handleClick} >
        <Email className='email-icon'/>
        <p>HELLO@HYPNO.COM</p>
    </div>
    )

}


export default Contact;