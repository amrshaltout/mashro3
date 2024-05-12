import React, { useState, useEffect } from "react";
import HouseCard from "../HouseCard/HouseCard";

const HouseBlock = () => {
  // Initialize state to hold house data and loading state
  const [houseData, setHouseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://rentor-b.onrender.com/property/all");
        const data = await res.json();
        setHouseData(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error: You can set an error state here if needed
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  // Render loading indicator if data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if there's an issue with fetching data
  // Optionally, you can customize this based on the specific error
  if (!loading && !houseData) {
    return <div>Error: Unable to fetch data</div>;
  }

  // Render HouseCard components if data is available
  return (
    <div className="bg-white">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full lg:w-full overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              {/* Map over the houseData array to create HouseCard instances */}
              {houseData.map((house, index) => (
                <HouseCard
                  key={index}
                  title={house.title}
                  type={house.type}
                  description={house.description}
                  imageUrl={house.imageUrl}
                  price={house.price}
                  
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseBlock;


