import React, { useEffect, useState } from 'react';
import SharedTitle from '../../Shared/sharedTitle';
import MenuItem from '../../Shared/menuItem';
import useMenu from '../../Hooks/useMenu';

const Offer = () => {

    const [menuData] = useMenu();
    const offered = menuData.filter(item => item.category === 'offered')

    return (
        <div className='mt-12'>
            <SharedTitle subtitle={"Don't miss"} title={"TODAY'S OFFER"}/>
            <div className="flex justify-center">
           <div className="grid md:grid-cols-2 mb-20 gap-10 md:px-40 px-5 mx-auto place-content-center">
            {
                offered.map(item => <MenuItem key={item._id} item={item} />)
            }
            </div>
           </div>
        </div>
    );
};

export default Offer;