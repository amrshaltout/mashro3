import React from "react";
import Search from "../Search/Search";

const trending_data = [
    {
      id: 1,
      src: "/images/Alex.jpg",
      title: "Alexandria",
      location: "Egypt",
      description: "15 Deals",
    },
    {
      id: 2,
      src: "/images/Cairo.jpg",
      title: "Cairo",
      location: "Egypt",
      description: "32 Deals",
    },
    {
      id: 3,
      src: "/images/Giza.jpg",
      title: "Giza",
      location: "Egypt",
      description: "45 Deals",
    },
    {
      id: 4,
      src: "/images/Aswan.jpg",
      title: "Aswan",
      location: "Egypt",
      description: "88 Deals",
    },
    {
      id: 5,
      src: "/images/Luxor.jpg",
      title: "Luxor",
      location: "Egypt",
      description: "92 Deals",
    },
  ];

const HeroSection = () => {
    return(
    <main className="bg-[#fbfbfa] pb-10 mb-10">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-black pt-10">Find your Next Stay</h2>
        <h3 className="text-black py-5 text-xl">
          Search low prices on hotels, homes and much more...
        </h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <Search/> 
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll scrollbar-hide">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />

              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    );
};

export default HeroSection;