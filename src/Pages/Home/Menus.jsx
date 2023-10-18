import React from "react";
import SharedTitle from "../../Shared/sharedTitle";
import featuredImage from "../../assets/home/featured.jpg";

const Menus = () => {
  return (
    <div className="bg-featured-bg mx-auto flex justify-center justify-items-center bg-fixed bg-no-repeat bg-cover">
      <div className="bg-black bg-opacity-50">
        <SharedTitle subtitle={"Check"} title={"FROM OUR MENU"} />

        <div className="content flex text-white mx-auto   justify-center justify-items-center">
          <div className="items md:flex mx-auto md:px-20 py-10  gap-11 lg:gap-28">
            <img src={featuredImage} alt="" className=" w-[630px] h-[380px]" />
            <div className="text">
              <div className="date">
                <p className="text-[29px]">March 20, 2024</p>
                <p className="font-black text-red-600 text-[35px]">WHERE CAN I GET SOME?</p>
                <p className="pt-4 text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
