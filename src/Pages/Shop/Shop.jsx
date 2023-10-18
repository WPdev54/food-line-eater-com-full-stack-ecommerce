import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet';
import Food from './Tabs';

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Eater Ecommerce || Shop
                </title>
            </Helmet>
            <Banner />
            <Food />
        </div>
    );
};

export default Shop;