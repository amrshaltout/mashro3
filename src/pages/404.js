import React from "react";

const NotFoundPage = () => {

    return (
        <main id="content">
          {/* <!-- advertisement --> */}
          {/* <div class="bg-gray-50 py-4 hidden">
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
              <div class="mx-auto table text-center text-sm">
                <a class="uppercase" href="#">Advertisement</a>
                <a href="#">
                  <img src="src/img/ads/ads_728.jpg" alt="advertisement area"/>
                </a>
              </div>
            </div>
          </div> */}
      
          {/* <!-- block  --> */}
          <div class="bg-white py-6">
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
              <div class="flex flex-row flex-wrap">
                <div class="flex-shrink max-w-full w-full">
                  <div class="p-10 text-center">
                      <div class="mb-4 text-center">
                      <h1 class="text-6xl text-gray-800 font-bold mb-2">404</h1>
                      <span class="inline-block h-0.5 w-20 bg-red-600"></span>
                    </div>
                    <h3 class="text-2xl mb-2">Oops! That page can’t be found.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
    }

export default NotFoundPage;