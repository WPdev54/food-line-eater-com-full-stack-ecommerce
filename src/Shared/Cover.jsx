import React from "react";

const Cover = ({img , text , heading }) => {
  return (
      <div style={{backgroundImage: `url("${img}")`}} className="bg-blend-saturation before:blur bg-fixed flex justify-center justify-items-center items-center bg-cover w-[100%] overflow-x-hidden md:h-[90vh]">
        <div className="overlay flex justify-items-center justify-center bg-black text-white bg-opacity-75">
          <div className="content px-24 py-20">
            <h1 className="text-center text-[70px]">{heading}</h1>
            <p className=" text-center text-[20px]">
              {text}
            </p>
          </div>
        </div>
      </div>
  );
};

export default Cover;
