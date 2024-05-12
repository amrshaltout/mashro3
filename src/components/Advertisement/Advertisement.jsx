import react from 'react';

const Advertisement = () => {

    return(
        <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
        <div class="w-full bg-gray-50 h-full">
          <div class="text-sm py-6 sticky">
            <div class="w-full text-center">
              <a class="uppercase" href="#">Advertisement</a>
              <a href="#">
                <img class="mx-auto" src="/ads/250.jpg" alt="advertisement area"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Advertisement;