import React, { useEffect, useState } from "react";
import SharedTitle from "../../Shared/sharedTitle";
import LocationCard from "./LocationCard";

const Location = () => {
  const [location, setLocation] = useState([
    {
      "_id": "1",
      "icon": "https://img.icons8.com/?size=256&id=14181&format=png",
      "title": "PHONE",
      "number": "+38 (012) 34 56 789",
    },
    {
      "_id": "2",
      "icon": "https://img.icons8.com/?size=32&id=15989&format=png",
      "title": "ADDRESS",
      "number": "+38 34 56 789",
    },
    {
      "_id": "3",
      "icon": "https://img.icons8.com/?size=50&id=34&format=png",
      "title": "WORKING HOURS",
      "number": "Mon - Fri: 08:00 - 22:00",
    },
  ]);

  // console.log(location);

  return (
    <div className="py-12">
      <SharedTitle subtitle={"Visit Us"} title={"OUR LOCATION"} />
      {location.map((location) => (
        <LocationCard item={location}>
        </LocationCard>
      ))}
    </div>
  );
};

export default Location;
