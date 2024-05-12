import React from "react";
import { useRouter } from "next/router";

const ContactDetails = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/Published");
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
        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-amber-700">
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
          <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
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

      <div class="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div class="container mx-auto p-4">
          <div class="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Contact
            </h1>
            <form>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  class="border p-3 rounded w-96 "
                />
                <input
                  type="text"
                  placeholder="Last name"
                  class="border p-3 rounded w-96"
                />
              </div>
              <div class="mb-5">
                <input
                  type="email"
                  placeholder="Email address"
                  class="border p-3 rounded w-96"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  class="border p-3 rounded w-96 "
                />
                <input
                  type="text"
                  placeholder="Mobile Number2"
                  class="border p-3 rounded w-96"
                />
              </div>
              <input
                type="text"
                placeholder="Telephone"
                class="border p-3 rounded w-96 "
              />
            </form>
          </div>

          <link
            rel="stylesheet"
            href="https://unpkg.com/@themesberg/flowbite@1.1.0/dist/flowbite.min.css"
          />

          <div class="flex  w-auto  mb-5 mt-5 items-center border-l-8 border-amber-500 bg-white p-4 text-gray-900 shadow-lg">
            <div class="min-w-0">
              <h2 class="overflow-hidden text-ellipsis whitespace-nowrap">
                I want to be informed about all announcements and campaigns via
                commercial electronic mail.
              </h2>
            </div>

            <label
              for="toggle-example"
              class="flex items-center cursor-pointer relative  ml-5 mt-5 mb-4"
            >
              <input type="checkbox" id="toggle-example" class="sr-only" />
              <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
              <span class="ml-3 text-gray-900 text-sm font-medium mr-5">
                Email
              </span>
            </label>

            <label
              for="toggle-example-checked"
              class="flex items-center cursor-pointer relative mt-5 mb-4"
            >
              <input
                type="checkbox"
                id="toggle-example-checked"
                class="sr-only"
              />
              <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
              <span class="ml-3 text-gray-900 text-sm font-medium">SMS</span>
            </label>
          </div>

          <script src="https://unpkg.com/@themesberg/flowbite@1.1.0/dist/flowbite.bundle.js"></script>

          <button
            onClick={handleClick}
            type="button"
            id="theme-toggle"
            class="px-5  text-center justify-items-end py-2 rounded bg-amber-600 text-white hover:bg-amber-800 focus:outline-none transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </main>
  );
};
export default ContactDetails;
