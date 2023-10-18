import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;

  return (
    <div className="flex space-x-2">
            <img  className="rounded-full object-cover w-[100px] h-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-bold text-2xl">{name}</h3>
                <p className="font-semibold">{recipe}</p>
            </div>
            <p className="text-yellow-900 font-black">${price}</p>
        </div>
  );
};

export default MenuItem;
