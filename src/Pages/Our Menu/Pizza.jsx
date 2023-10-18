import React from 'react';
import useMenu from '../../Hooks/useMenu';
import pizzabg from '../../assets/menu/pizza-bg.jpg'
import Cover from '../../Shared/Cover';
import MenuItem from '../../Shared/menuItem';

const Pizza = () => {

    return (
        <div>
            <Cover  img={pizzabg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} heading={"PIZZA"}/>

            <div className="flex mt-14 justify-center">
           <div className="grid md:grid-cols-2 mb-20 gap-10 md:px-40 px-5 mx-auto place-content-center">
           {/*  {
                pizza.map(item => <MenuItem key={item._id} item={item} />)
            } */}
            </div>
           </div> 

        </div>
    );
};

export default Pizza;