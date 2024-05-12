import React from 'react';
import Sliders from '../components/Slider/Slider';
import{useRouter} from 'next/router'

const view = () => {
    const router = useRouter()
    const handleClick=()=>{
        router.push('/Contact-Details')
    }
    return (
        <main>
        <ol class="mx-56 mt-10 mb-10  flex  items-center w-auto">
<li class="flex ml-20 w-full items-center text-black dark:text-orange-500 after:content-[''] after:w-full after:h-1 after:border-b 
after:border-amber-100 after:border-4 after:inline-block dark:after:border-amber-600">
    <span class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
    class="w-6 h-6 bg-amber-600 ">
    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>

    </span>
</li>
<li class="flex w-full items-center after:content-[''] after:w-full after:h-1
 after:border-b after:border-amber-100 after:border-4 after:inline-block dark:after:border-amber-700">
    <span class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>

    </span>
</li>
<li class="flex w-full items-center after:content-[''] after:w-full after:h-1 
after:border-b after:border-gray-100 after:border-4 after:inline-block 
dark:after:border-gray-700">
    <span class="flex items-center justify-center w-10 h-10 bg-gray-100
    rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>

    </span>
</li>
<li class="flex items-center w-full">
    <span class="flex items-center justify-center w-10 h-10 bg-gray-100
    rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
    </span>
</li>
</ol>

<div class="bg-gray-100 pt-10 dark:bg-gray-800 transition-colors duration-300">
<Sliders/> 

<div className="bg-gray-100  dark:bg-gray-800 transition-colors duration-300" />
    <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl  font-semibold text-gray-900 dark:text-gray-100">Family House For Rent</h1>
        

            <p>
        <span class="inline-flex items-center text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="currentColor" class="w-6 h-6  text-amber-600">
            <path fill-rule="evenodd"
            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
            </svg>    
            Louran , Alexandria
        </span>
        </p>

        <h2 class="text-xl font-semibold mb-4 text-gray-900 mt-10 dark:text-gray-100">General Information</h2>
        <div class="text-gray-500">





        <dl>
            <div class="bg-white px-2 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                Advertise No  :          
                </dt>
                <dd class="mt-1 text-lg font-bold text-red-500 sm:mt-0 sm:col-span-2">
                    0-12323
                </dd>
            </div>
            <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                published Date
                </dt>
                <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    2March2024
                </dd>
            </div>
            <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                Advertise Status  :
                </dt>
                <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    Sale
                </dd>
            </div>
            <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                Housing Shape  :
                </dt>
                <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    Apartment
                </dd>
            </div>
            <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                Room + Living Number  :
                </dt>
                <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    4 + 1
                </dd>
            </div>
            <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                Gross / Net M²:
                </dt>
                <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                150M² / 135M²      
                </dd>
            </div>
            <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                Warming Type:                </dt>
                <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                Natural Gas 
                </dd>
            </div>
            <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                Building Age:
                </dt>
                <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    5
                </dd>
            </div>
        </dl>
    </div>
</div>
</div>


<div className="bg-gray-100  dark:bg-gray-800 transition-colors duration-300" />
    <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Explanation</h1>
            <p class="text-gray-500 text-xl">This sunny and spacious room is for those traveling light and looking for a comfy 
    and cosy place to lay their head for a night or two. This beach house sits
    in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets 
    and is close to all the major attractions such as Edinburgh Castle and Arthur Seat.
</p>

</div>
</div>

<div className="bg-gray-100  dark:bg-gray-800 transition-colors duration-300" />
    <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Internal & External Features</h1>


            <div class="grid grid-cols-2 gap-4">
    <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Security
        </span>
        </p>
        </div>
    <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Elevator
        </span>
        </p></div>

        <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Alarm
        </span>
        </p>
        </div>
    <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            ADSL
        </span>
        </p></div>

        <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Laundry Room
        </span>
        </p>
        </div>
    <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Dressing Room
        </span>
        </p></div> <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Balacony
        </span>
        </p>
        </div>
    <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Sauna
        </span>
        </p></div> <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Fitness
        </span>
        </p>
        </div>
    <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Market
        </span>
        </p></div> <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Generator
        </span>
        </p>
        </div>
    <div><p>
        <span class="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
            Car Park
        </span>
        </p>
            </div>

</div>
</div>




<button onClick={handleClick}  type="button" id="theme-toggle" class="px-5 mt-10 text-center justify-items-end py-2 rounded bg-amber-600 text-white hover:bg-amber-800 focus:outline-none transition-colors">
                Next
            </button>
    </div>
</div>
    </main>

    ) 
}

export default view