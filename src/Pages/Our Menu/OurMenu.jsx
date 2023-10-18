import React from 'react';
import Banner from './Banner';
import Offer from './Offer';
import Deserts from './Deserts';
import Pizza from './Pizza';
import MenuCategory from './MenuCategory';
import useMenu from '../../Hooks/useMenu';
import SharedTitle from '../../Shared/sharedTitle';
import desertBG from '../../assets/menu/dessert-bg.jpeg'
import Cover from '../../Shared/Cover';
import pizzabg from '../../assets/menu/pizza-bg.jpg'
import saladbg from '../../assets/menu/salad-bg.jpg'
import soupbg from '../../assets/menu/soup-bg.jpg'
import { Helmet } from 'react-helmet';
import OrderBtn from '../../Shared/Order-btn';



const OurMenu = () => {
    
    const [menuData] = useMenu();
    const pizza = menuData.filter(item => item.category === 'pizza')
    const dessert = menuData.filter(item => item.category === 'dessert')
    const soup = menuData.filter(item => item.category === 'soup')
    const salad = menuData.filter(item => item.category === 'salad')
    const offered = menuData.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Eater Ecommerce || Menu</title>
            </Helmet>
            <Banner />
            <SharedTitle subtitle={"Don't miss"} title={"TODAY'S OFFER"}/>
            <MenuCategory  items={offered}/>
            <OrderBtn/>
            <Cover img={desertBG} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} heading={"DESSERTS"}/>
            <MenuCategory  items={dessert}/>
            <OrderBtn/>
            <Cover img={pizzabg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} heading={"PIZZA"}/>
            <MenuCategory  items={pizza}/>
            <OrderBtn/>
            <Cover img={saladbg} text={"Lorem Ipsum has been the ndustry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} heading={"SALAD"}/>
            <MenuCategory  items={salad}/>
            <OrderBtn/>
            <Cover img={soupbg} text={"Lorem Ipsum has been the ndustry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} heading={"SOUP"}/>
            <MenuCategory  items={soup}/>
            <OrderBtn/>
            
            
        </div>
    );
};

export default OurMenu;