import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "./FoodCard";
import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";

const Food = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");


  return (
    <Tabs  className=" py-8 uppercase border-0  text-center">
      <TabList>
        <Tab>Salad</Tab>
        <Tab>pizza</Tab>
        <Tab>soups</Tab>
        <Tab>desserts</Tab>
        <Tab>drinks</Tab>
      </TabList>

      <TabPanel>
       <ShopTab item={salad}/>
      </TabPanel>

      <TabPanel>
       <ShopTab item={pizza}/>
      </TabPanel>

      <TabPanel>
       <ShopTab item={soup}/>
      </TabPanel>

      <TabPanel>
       <ShopTab item={desserts}/>
      </TabPanel>

      <TabPanel>
       <ShopTab item={drinks}/>
      </TabPanel>

    </Tabs>
  );
};

export default Food;
