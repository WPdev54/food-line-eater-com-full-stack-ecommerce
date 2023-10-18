import React from "react";
import MenuItem from "../../Shared/menuItem";

const MenuCategory = ({items}) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 my-20 mb-20 gap-10 md:px-40 px-5 mx-auto place-content-center">
          {items.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
