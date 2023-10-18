import React from "react";

const LocationCard = ({ item }) => {
  const { icon, title, number } = item;

  return (
    <div>
        <div className="card">
            <div className="heading">
                <img src={icon}  height={30} width={30}/>
            </div>
        </div>
    </div>
  )
};

export default LocationCard;
