import React from "react";
import { motion } from "framer-motion";

const FoodCard = ({item}) => {

    const {name , image , price , recipe, category } = item;

  return (
    <motion.div initial={{marginLeft:65}} whileInView={{marginLeft:0}} className="flex justify-center ">
      <div className="card w-96 mx-auto mb-8 mt-7 bg-base-100 shadow-2xl">
        <figure>
          <img
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-warning">Price: {price} $</div>
          <div className="badge badge-accent">{category}</div>
          <p className="text-left py-5">{recipe}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
