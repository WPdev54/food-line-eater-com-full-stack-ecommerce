import React from 'react';
import ShopTab from '../Shop/ShopTab';
import useMenu from '../../Hooks/useMenu';
import SharedTitle from '../../Shared/sharedTitle';

const Recommed = () => {
    const [menu] = useMenu()
  const offered = menu.filter((item) => item.category === "offered");
  offered.slice(3)
    return (
        <div className='py-6'>
            <SharedTitle subtitle={"Should Try"} title={"CHEF RECOMMENDS"}/>
            <ShopTab item={offered}/>
        </div>
    );
};

export default Recommed;