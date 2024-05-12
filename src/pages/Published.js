import React from "react";
import { useRouter } from "next/router";

const Published = () => {
  const router = useRouter();
  const Adding = () => {
    router.push("/propertyDetails");
  };
  const GoBack = () => {
    router.push("/");
  };

  return (
    <main>
      <ol class="mx-56 mt-10 mb-10  flex  items-center w-auto">
        <li class="flex ml-20 w-full items-center text-black dark:text-orange-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-amber-100 after:border-4 after:inline-block dark:after:border-amber-600">
          <span class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 bg-amber-600 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </span>
        </li>
        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-orange-100 after:border-4 after:inline-block dark:after:border-amber-700">
          <span class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
        </li>
        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-orange-100 after:border-4 after:inline-block dark:after:border-amber-700">
          <span class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </span>
        </li>
        <li class="flex items-center w-full">
          <span class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </span>
        </li>
      </ol>

      <div class="bg-gray-100">
        <div class="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            class="text-amber-900 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Your ad has been published successfully.
            </h3>
            <p class="text-gray-600 my-2">Thank you .</p>
            <div class="py-3 text-center ">
              <button
                onClick={Adding}
                type="submit"
                class="bg-amber-600 hover:bg-amber-500 m-8 text-white font-semibold py-3 p-5 rounded text-lg w-auto "
              >
                ADDING NEW ONE
              </button>
              <button
                onClick={GoBack}
                type="submit"
                class="bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 p-5 rounded text-lg w-auto "
              >
                GO BACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Published;
