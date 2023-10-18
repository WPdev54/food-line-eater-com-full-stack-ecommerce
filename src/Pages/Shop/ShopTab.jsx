import React from "react";
import { motion } from "framer-motion";
import FoodCard from "./FoodCard";


const ShopTab = ({item}) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="grid md:grid-cols-3"
      >
        {item.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </motion.div>
    </div>
  );
};

export default ShopTab;
