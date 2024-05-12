
import React from 'react';

import { Carousel } from 'flowbite';
import { useEffect } from 'react';


const  TestPage = () =>{

    useEffect(() => {
        const carouselElement = document.getElementById('controls-carousel');

        const items = [
            { position: 0, el: document.getElementById('data-carousel-item-1') },
            { position: 1, el: document.getElementById('data-carousel-item-2') },
            { position: 2, el: document.getElementById('data-carousel-item-3') },
            { position: 3, el: document.getElementById('data-carousel-item-4') },
        ];

        const options = {
            defaultPosition: 0,
            interval : 5000,

        };
        const instanceOptions = {
            id :'controls-carousel',
            override: true
        };

        const carousel = new Carousel(carouselElement,items ,options, instanceOptions);

        // Add event listeners
        const prevButton = carouselElement.querySelector('[data-carousel-prev]');
        const nextButton = carouselElement.querySelector('[data-carousel-next]');


        prevButton.addEventListener('click', () => {
            carousel.prev();
        });

        nextButton.addEventListener('click', () => {
            carousel.next();
        });
    }, []);



  return (
<div id="controls-carousel" class="relative w-full" data-carousel="static">

    <div class="relative h-56 overflow-hidden rounded-lg md:h-96 ">

        <div id='data-carousel-item-1'class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/img6.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2" alt="..."/>
        </div>
        
        <div id='data-carousel-item-2' class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/images/interior1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2" alt="..."/>
        </div>

        <div id='data-carousel-item-3' class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/interior2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2" alt="..."/>
        </div>

        <div id='data-carousel-item-4' class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/interior3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2" alt="..."/>
        </div>

    </div>

    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
  );
}

export default TestPage;
