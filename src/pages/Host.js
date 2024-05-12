import HouseBlock from "@/components/HouseBlock/HouseBlock";
import React from "react";
import Pagination from "@/components/Pagination/Pagination";
import HostCard from "@/components/HostCard/HostCard";


const Host = () => {
    return (
        <main id="content">

          <HostCard/>
          <HouseBlock/>
          <Pagination/>


        </main>
    );
    };

export default Host;