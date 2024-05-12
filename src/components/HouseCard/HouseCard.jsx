import react from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

const HouseCard = ({ title, location, description, imageUrl, price }) => {
    return (
        <div className="py-6 px-6 sm:p-6 md:py-10 md:px-1 lg:px-0">
        <div className="max-w-4xl mx-auto grid grid-cols-1">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white lg:text-white lg:pb-7 lg:px-1">Beach House in Alexandria</h1>
            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400 lg:text-white lg:px-1">Featured</p>
            </div>

            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 lg:mb-6 sm:grid-cols-4">
        
            <Image src={"/images/" + "img6.jpg"} alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-full lg:col-span-full" loading="lazy" width={500} height={300}/>

            </div>
            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt className="sr-only">Reviews</dt>
            <dd className="text-amber-600 flex items-center">
                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-amber-600">
                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                </svg>
                <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center">
                <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                <circle cx="1" cy="1" r="1" />
                </svg>
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                Alexandria, Egypt
            </dd>

            <dt className="sr-only">Price</dt>
            <dd className="flex items-center">
            <img className="m-2 pl-2" width="24" height="24" src="https://img.icons8.com/ios/50/price-tag--v1.png" alt="price-tag--v1"/>
               {price} / night
            </dd>


            </dl>
            <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    {/* Use Link from next/link for navigation */}
                    <Link href="/Details">
                        <span className="bg-amber-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</span>
                    </Link>
            </div>


            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:col-span-2 dark:text-slate-400">
            {description}
            </p>
        </div>
        </div>

    );
};

export default HouseCard;