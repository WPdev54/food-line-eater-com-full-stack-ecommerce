import React, { useEffect, useState } from 'react';
import SharedTitle from '../../Shared/sharedTitle';
import MenuItem from '../../Shared/menuItem';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {

    const [menuData] = useMenu();
    const popular = menuData.filter(item => item.category === 'popular')

  /*   const [menuData , setMenuData] = useState([])

        useEffect(()=>{
            fetch("../../../public/menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'dessert')
                setMenuData(popularItems)
            })
        },[])
        console.log(menuData); */


    return (
        <div>
            <SharedTitle subtitle={"Check It Out!"} title={"From Our Menu"}/>

           <div className="flex justify-center">
           <div className="grid md:grid-cols-2 mb-20 gap-10 md:px-40 px-5 mx-auto place-content-center">
            {
                popular.map(item => <MenuItem key={item._id} item={item} />)
            }
            </div>
           </div>
        </div>
    );
};

export default PopularMenu;