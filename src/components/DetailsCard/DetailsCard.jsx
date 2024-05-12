import React from 'react';
import Image from "next/image";
import Lefttitle from '../Lefttitle/Lefttitle';


const DetailsCard = () => {
    return (
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
              <div class="flex flex-row flex-wrap">
              <div className="py-6 px-6 sm:p-6 md:py-10 md:px-1 lg:px-0">


                <div className="max-w-4xl mx-auto grid grid-cols-1">

                    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                    <dt className="sr-only">Reviews</dt>
                    <dd className="text-amber-600 flex items-center">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-amber-600">
                        <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
                    </dd>

                    <dt className="sr-only">Location</dt>
                    <dd className="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                        <circle cx="1" cy="1" r="1" />
                        </svg>
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                        <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                        <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        Alexandria, Egypt
                    </dd>

                    <dt className="sr-only">Price</dt>
                    <dd className="flex items-center">
                    <img className="m-2 pl-2" width="24" height="24" src="https://img.icons8.com/ios/50/price-tag--v1.png" alt="price-tag--v1"/>
                        $119 / night
                    </dd>
                    </dl>
                </div>

     
        </div>
        </div>


        <div>
        <Lefttitle title="Description"/>
                <p className="mt-4 text-sm leading-6 dark:text-slate-400">
                This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur Seat.
                </p>

        </div>

        </div>

    );
    }
export default DetailsCard;