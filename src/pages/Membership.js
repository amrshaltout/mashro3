import React from "react";


const Membership = () => {
    return (
        <main>
<div class="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto p-4">
        <div class="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Membership Information </h1>
            <form>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First name" class="border p-3 rounded w-96 "/> 
                    <input type="text" placeholder="Last name" class="border p-3 rounded w-96"/>
                </div>
                <div class="mb-5">
                    <input type="email" placeholder="Email address" class="border p-3 rounded w-96" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Province" class="border p-3 rounded w-96 "/> 
                    <input type="text" placeholder="District" class="border p-3 rounded w-96"/>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Mobile Number" class="border p-3 rounded w-96 "/> 
                    <input type="text" placeholder="Mobile Number2" class="border p-3 rounded w-96"/>
                </div>
                <input type="text" placeholder="Telephone" class="border p-3 rounded w-96 "/> 
                {/* <div class="max-w-lg justify-start  mb-5 mt-5"> */}

</form>
<div>
    </div>
</div>
    <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.1.0/dist/flowbite.min.css" />


<div class="flex  w-auto  mb-5 mt-5 items-center border-l-8 border-amber-500 bg-white p-4 text-gray-900 shadow-lg">
    <div class="min-w-0">
        <h2 class="overflow-hidden text-ellipsis whitespace-nowrap">I want to be informed about all announcements and campaigns via commercial electronic mail.</h2>
    </div>

<label for="toggle-example" class="flex items-center cursor-pointer relative  ml-5 mt-5 mb-4">
<input type="checkbox" id="toggle-example" class="sr-only" />
<div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
<span class="ml-3 text-gray-900 text-sm font-medium mr-5">Email</span>
</label>

<label for="toggle-example-checked" class="flex items-center cursor-pointer relative mt-5 mb-4">
<input type="checkbox" id="toggle-example-checked" class="sr-only" />
<div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
<span class="ml-3 text-gray-900 text-sm font-medium">SMS</span>
</label>
</div>

<script src="https://unpkg.com/@themesberg/flowbite@1.1.0/dist/flowbite.bundle.js"></script>


            <button type="button" id="theme-toggle" class="px-5  text-center justify-items-end py-2 rounded bg-amber-600 text-white hover:bg-amber-800 focus:outline-none transition-colors">
                Save
            </button>
    </div>
</div>
    </main>


        );
    }
    export default Membership