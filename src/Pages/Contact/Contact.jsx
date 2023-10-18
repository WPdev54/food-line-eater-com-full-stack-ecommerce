import React from 'react';
import Cover from '../../Shared/Cover';
import contactBg from '../../assets/contact/banner.jpg'
import Location from './Location';

const Contact = () => {
    return (
        <div>
            <Cover img={contactBg} text={"WOULD YOU LIKE TO TRY A DISH?"} heading={"CONTACT US"}/>
            <Location />
        </div>
    );
};

export default Contact;