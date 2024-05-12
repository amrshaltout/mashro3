import React from 'react';
import Lefttitle from '../Lefttitle/Lefttitle';
import HouseCard from '../HouseCard/HouseCard';
const Recommended  = () => {

return (
<div class="bg-gray-100 py-4 mt-10">
<div class="container mx-auto px-4">
  <Lefttitle title="Recommended For you"/>
  <div className="flex space-x-4 py-5 overflow-x-scroll scrollbar-hide">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Property Card */}
    <HouseCard/>
    
    {/* Property Card */}
    <HouseCard/>
    {/* Add more Property Card */}
  </div>
</div>
</div>
</div>


    )
}

export default Recommended;