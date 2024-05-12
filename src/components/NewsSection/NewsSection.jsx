import React from "react";

const NewsSection = () => {
  return (
    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        {/* <!-- big grid 1 --> */}
        <div className="flex flex-row flex-wrap">
          {/* <!-- Start left cover --> */}
          <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
            <div className="relative max-h-96 overflow-hidden">
              <a href="#">
                <img className="max-w-full w-full mx-auto h-auto" src="/images/img6.jpg" alt="Image description" />
              </a>
              <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                <a href="#">
                  <h2 className="text-2xl lg:text-3xl font-bold capitalize text-white mb-3">
                    Amazon Shoppers Are Ditching Designer Belts for This Best-Selling
                  </h2>
                </a>
                <p className="text-gray-100 hidden sm:inline-block text-sm lg:text-base">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This is very helpful for generating default content.
                </p>
                <div className="pt-2">
                  <div className="text-gray-100">
                    <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Start box news --> */}
          <div className="flex-shrink max-w-full w-full lg:w-1/2 ">
            <div className="grid grid-cols-2 gap-0.5">
              {[1, 2, 3, 4].map((index) => (
                <article key={index} className="flex-shrink max-w-full w-full">
                  <div className="relative max-h-48 overflow-hidden">
                    <a href="#">
                      <img className="max-w-full w-full mx-auto h-auto" src="/images/img6.jpg" alt="Image description" />
                    </a>
                    <div className="absolute px-4 pt-6 pb-4 bottom-0 w-full bg-gradient-cover">
                      <a href="#">
                        <h2 className="text-sm lg:text-lg font-bold capitalize leading-tight text-white mb-1 sm:text-sm">
                          News magazines are becoming obsolete, replaced by gadgets
                        </h2>
                      </a>
                      <div className="pt-1">
                        <div className="text-gray-100">
                          <div className="inline-block h-3 border-l-2 border-red-600 mr-2 sm:text-sm"></div>Techno
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;




