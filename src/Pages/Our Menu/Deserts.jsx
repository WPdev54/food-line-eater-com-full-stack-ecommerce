import React from 'react';
import Cover from '../../Shared/Cover';
import desertBG from '../../assets/menu/dessert-bg.jpeg'
import MenuItem from '../../Shared/menuItem';
import useMenu from '../../Hooks/useMenu';

const Deserts = () => {

    const [menuData] = useMenu();
    const dessert = menuData.filter(item => item.category === 'dessert')

    return (
        <div>
            <Cover  img={desertBG} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} heading={"DESSERTS"}/>

            <div className="flex mt-14 justify-center">
           <div className="grid md:grid-cols-2 mb-20 gap-10 md:px-40 px-5 mx-auto place-content-center">
            {
                dessert.map(item => <MenuItem key={item._id} item={item} />)
            }
            </div>
           </div> 

        </div>
    );
};

export default Deserts;