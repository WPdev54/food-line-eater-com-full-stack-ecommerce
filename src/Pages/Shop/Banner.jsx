import React from 'react';
import Cover from '../../Shared/Cover';
import shopBG from '../../assets/shop/banner2.jpg'

const Banner = () => {
    return (
        <div>
            <Cover img={shopBG} text={"Would you like to try a dish?"} heading={"OUR SHOP"}/>
        </div>
    );
};

export default Banner;