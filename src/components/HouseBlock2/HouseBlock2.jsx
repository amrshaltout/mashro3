import React, { useState, useEffect } from "react";
import HouseCard from "../HouseCard/HouseCard";

const HouseBlock = () => {
  // Initialize state to hold house data, loading state, and pagination state
const [houseData, setHouseData] = useState([]);
const [loading, setLoading] = useState(true);
const [currentPage, setCurrentPage] = useState(1);
const [housesPerPage] = useState(12); // Change this value to the number of houses per page

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

// Get current houses
const indexOfLastHouse = currentPage * housesPerPage;
const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
const currentHouses = houseData.slice(indexOfFirstHouse, indexOfLastHouse);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Calculate total number of pages
const totalPages = Math.ceil(houseData.length / housesPerPage);

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {currentHouses.map((house, index) => (
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
    {/* Pagination */}
    <div className="flex justify-center mt-4">
        <nav>
        <ul className="pagination flex justify-center">
            {[...Array(totalPages)].map((_, index) => (
            <li key={index} className="page-item">
                <button
                onClick={() => {
                    paginate(index + 1);
                }}
                className={`page-link font-weight-700 ${
                    currentPage === index + 1 ? "text-yellow-600" : ""
                } block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5`}
                >
                {index + 1}
                </button>
            </li>
            ))}
        </ul>
        </nav>
    </div>
    </div>
</div>
);
};

export default HouseBlock;