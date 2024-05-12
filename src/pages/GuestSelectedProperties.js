import React from "react";
import HouseBlock from "@/components/HouseBlock/HouseBlock";
import Pagination from "@/components/Pagination/Pagination";

const GuestSelectedProperties = () => {
    return (

<main>
<div
            class="h-full ml-10 mr-10 flex flex-col bg-white
            :bg-gray-500 shadow-xl ">
            
            <div class="bg-orange-400 shadow-lg pb-3 rounded-b-2xl">
                <div
                    class="flex  flex-row flex-wrap -mx-3 rounded-b-3xl bg-white light:bg-gray-500 space-y-5  items-left pl-10 py-7 ">
                    <img class="h-20 w-20  rounded-full"
                        src="images/Guest.jpg"
                        alt="User" />
                    <a href="#"> <span
                            class="text-h1 text-2xl font-bold ml-10">John Doe</span></a>
                            <div class="felx mx-auto pt-10 w-100  ">
                            <p><a target="_blank" class="hover:text-blue-500" rel="noopener"></a></p>
                            {/* <!--description--> */}
                            <p class="hidden mt-10  sm:block">Programmer, Mom, Passionate about architecture</p>
                            {/* <!--social--> */}
                <a href=""> <button
                        class="p-2 shadow-lg ml-10 tr-300 w-100 font-medium  bg-orange-500 rounded-md hover:bg-orange-600 text-white">Edit profile</button></a>
            
                
        </div>
        </div>
                
                <div
                    class="grid px-2 py-2  items-center justify-around grid-cols-3 gap-4 divide-x divide-solid ">
                    <div class="col-span-1 flex flex-col items-center ">
                        <span class="text-md font-bold 0 text-white">Selected Properties</span>
                        
                        <span class="text-lg font-bold text-white">6</span>

                    </div>
                    <div class="col-span-1 px-3 flex flex-col items-center ">
                        <span class="text-md font-bold text-white">
                            Bookings</span>
                        <span class="text-lg font-bold text-white">1</span>
                    </div>
                    <div class="col-span-1 px-3 flex flex-col items-center ">
                    <span class="text-md font-medium text-white">More properties</span>

                        <span class="text-lg font-bold text-white">
                            546</span>
                    </div>
                </div>

            </div>

            <div
                class="grid rounded-2xl divide-y divide-dashed hover:divide-solid  justify-evenly bg-gray-50 dark:bg-gray-300  mt-10 grid-cols-4">
                <div class="col-span-1  p-2 ">
                    <div class="flex flex-col items-center ">
                        <a href=""> <button
                                class="tr-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-10 h-10 ml-5 text-gray-500">
                                <path stroke-linecap="round"
                                stroke-linejoin="round" 
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                                <span class="text-md font-medium">Favourites</span>
                            </button></a>
                    </div>
                </div>


                <div class="col-span-1  p-2 bg-gray-200">
                    <div class="flex flex-col items-center ">
                        <a href=""> <button
                                class="tr-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-10 h-10 ml-10 text-gray-500">
                                <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                                <span class="text-md font-medium">Selected Properties</span>
                            </button></a>
                    </div>
                </div>


                <div class="col-span-1  p-2">
                    <div class="flex flex-col items-center ">
                        <a href=""> <button
                                class="tr-300">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="h-10 w-10 ml-3 text-gray-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor"
                                    stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span class="text-md font-medium">Contacts</span>
                            </button></a>
                    </div>
                </div>
                <div class="col-span-1  p-2">
                    <div class="flex flex-col items-center">
                        <a href=""> <button
                                class="tr-300">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="h-10 w-10 ml-4 text-gray-500 items-center" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor"
                                    stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                                <span class="text-md font-medium">Notifications</span>
                            </button></a>
                    </div>
                </div>
                </div>
                </div>

                
                
        



                
                <div class="flex-shrink max-w-full w-full px-3 mt-10 ml-10">
                    <div class="flex ml-10  px-5 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-8 h-8 mt-3 text-gray-500">
                                <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
        

                    <h2 class="text-gray-800 text-2xl font-bold">
                        <span class="inline-block h-5 border-l-3 border-orange-500 mr-2 mt-5"></span> Selected Properties     
                        </h2>


                

                
                </div>
            </div>


            <HouseBlock/>
            <Pagination/>







    
</main>      

);
}
export default GuestSelectedProperties