import React from 'react';
import Recommended from '../components/Recommended/Recommended';
import Sliders from '../components/Slider/Slider';
import HostCard from '@/components/HostCard/HostCard';
import DetailsCard from '@/components/DetailsCard/DetailsCard';
import Reviews from '@/components/Reviews/Reviews';


const Details = () => {

    return (

<div>
<Sliders/>
<HostCard/>
<DetailsCard/>

<Reviews/>  
<Reviews/>          
<div className="p-10">
<Recommended/>   
</div>

        
</div>
    );
    }

export default Details;