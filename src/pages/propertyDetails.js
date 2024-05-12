import React, { useState } from "react";
import Bar from "@/components/FormHero/BarAd";
import { useRouter } from "next/router";
import UploadImage from "@/components/UploadImage/UploadImage";
import MyGoogleMap from "@/components/Map/GoogleMapComponent";
import axios from "axios";
import { images } from "../../next.config";

const PropertyDetails = () => {
  const url = "https://rentor-b.onrender.com/property/add";
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImagesUploaded = (newImages) => {
    // Update state with the newly uploaded images
    setUploadedImages([...uploadedImages, ...newImages]);
  };
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    type: "",
    area: "",
    num_rooms: "",
    num_bath_rooms: "",
    floor_location: "",
    street_address: "",
    furnished: true,
    city: "",
    postal_code: "",
    email: "",
    phone: "",
    images: [],
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        title: data.title,
        description: data.description,
        price: data.price,
        type: data.type,
        area: data.area,
        num_rooms: data.num_rooms,
        num_bath_rooms: data.num_bath_rooms,
        floor_location: data.floor_location,
        street_address: data.street_address,
        furnished: data.furnished,
        city: data.city,
        postal_code: data.postal_code,
        email: data.email,
        phone: data.phone,
        images: uploadedImages,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  function handle(e) {
    const newData = { ...data };
    if (e.target.id === "furnished") {
      // Convert the value to a boolean
      newData[e.target.id] = e.target.value === "true";
    } else {
      // For other inputs, just set the value as it is
      newData[e.target.id] = e.target.value;
    }
    // newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
  }

  const router = useRouter();
  // const handleClick = () => {
  //   router.push("/view");
  // };

  return (
    <div
      style={{ backgroundImage: "url('./images/image1.jpg')" }}
      className="bg-fixed	bg-center bg-no-repeat bg-cover"
    >
      <Bar />
      <div className="container mx-auto mb-6">
        <form onSubmit={(e) => submit(e)}>
          {/* <div className=" mb-4 ">
            <div className="bg-white dark:bg-amber-600 rounded-lg p-6 shadow-md">
              <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-amber-600 w-40">
                Category
              </h1>

              <div className=" justify-start grid grid-cols-1 md:grid-cols-4 gap-2 ">
                <div className="max-w-sm flex justify-start py-5">
                  <select
                    id="countries"
                    className="shadow-md block mb-2 text-sm text-gray-600 dark:text-gray-400 bg-white border border-gray-300  rounded-lg    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue>Housing</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>
          </div> */}
          <div className="mx-auto">
            <div className="general_info bg-white shadow-lg  px-6 pb-12 pt-6 mb-4 rounded-lg ">
              <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-amber-600 w-40">
                General Information
              </h1>
              <div className=" grid md:grid-cols-3 gap-4 w-full py-5">
                <input
                  onChange={(e) => handle(e)}
                  id="title"
                  value={data.title}
                  type="text"
                  placeholder="Title"
                  className="text-md shadow-md border p-2 rounded-md w-full placeholder:text-gray-500"
                  // block mb-2 text-sm text-gray-600 dark:text-gray-400 bg-white border border-gray-300  rounded-lg    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500
                />
                <input
                  onChange={(e) => handle(e)}
                  id="price"
                  value={data.price}
                  type="text"
                  inputmode="numeric"
                  placeholder="Price"
                  className="text-md shadow-md border p-2 rounded-md w-full placeholder:text-gray-500"
                />

                <select
                  onChange={(e) => handle(e)}
                  id="type"
                  value={data.type}
                  className="shadow-md block text-md text-gray-500 dark:text-gray-500 bg-white border border-gray-300 rounded-md w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Type" disabled hidden selected className="">
                    Type
                  </option>
                  <option value="dublex">Duplex</option>
                  <option value="apartment">Apartment</option>
                  <option value="room">Room</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
              <div className="grid md:grid-cols-1 gap-4 w-full">
                <textarea
                  onChange={(e) => handle(e)}
                  id="description"
                  value={data.description}
                  rows={5}
                  name="description"
                  placeholder="Describe The Property"
                  className="text-md p-2 rounded-md shadow-md border placeholder:text-gray-500"
                  required
                />
              </div>
            </div>
            <div className="bg-white border-2 rounded-md shadow-md p-6">
              <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-amber-600 w-40">
                Detailed Information
              </h1>
              {/* <div className="grid md:grid-cols-3 gap-4 mb-4 w-full"> */}
              <div className="mb-4 grid grid-cols-4 gap-4">
                <input
                  onChange={(e) => handle(e)}
                  id="area"
                  value={data.area}
                  type="text"
                  placeholder="Area (m²)"
                  className="border p-2 rounded text-md shadow-md placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="num_rooms"
                  value={data.num_rooms}
                  type="text"
                  placeholder="Bedrooms"
                  className=" border p-2 rounded text-md shadow-md placeholder:text-gray-500"
                />
                {/* </div> */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"> */}
                <input
                  onChange={(e) => handle(e)}
                  id="num_bath_rooms"
                  value={data.num_bath_rooms}
                  type="text"
                  placeholder="Bathrooms"
                  className="border p-2 rounded text-md shadow-md placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="floor_location"
                  value={data.floor_location}
                  type="text"
                  placeholder="Floor"
                  className="border p-2 rounded shadow-md placeholder:text-gray-500"
                />
              </div>
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold">Furnished</h3>
                <label
                  className="border px-3 py-2 mr-2 shadow-md text-sm"
                  for="furnished-yes"
                >
                  <input
                    onChange={(e) => handle(e)}
                    id="furnished"
                    value={true}
                    type="radio"
                    name="furnished"
                    className="mr-1"
                  />
                  Yes
                </label>

                <label
                  for="furnished-no"
                  className="border px-3 py-2 mr-2 shadow-md text-sm"
                >
                  <input
                    onChange={(e) => handle(e)}
                    id="furnished"
                    value={false}
                    type="radio"
                    name="furnished"
                    className="mr-1"
                  />
                  No
                </label>
              </div>
              {/* </div> */}

              <input
                onChange={(e) => handle(e)}
                id="street_address"
                value={data.street_address}
                type="text"
                placeholder="Address"
                className="border p-2 rounded w-full shadow-md mb-4 placeholder:text-gray-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  onChange={(e) => handle(e)}
                  id="city"
                  value={data.city}
                  type="text"
                  placeholder="City"
                  className="border p-2 rounded w-full shadow-md placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="postal_code"
                  value={data.postal_code}
                  type="text"
                  placeholder="ZIP / Postal code"
                  className="border p-2 rounded w-full shadow-md placeholder:text-gray-500"
                />
              </div>
              <div className="mb-6">
                <h2 className="mb-3 text-sm font-semibold">
                  Uplode property photos{" "}
                </h2>
                <UploadImage onImagesUploaded={handleImagesUploaded} />
              </div>
              <div>
                <h2 className="mb-3 text-sm font-semibold">
                  Choose the property location{" "}
                </h2>
                <MyGoogleMap />
              </div>
            </div>
            <div className="mx-auto">
              <div className="bg-white border-2 rounded-md shadow-md p-6 my-4">
                <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-amber-600 w-40">
                  Contact
                </h1>
                <input
                  onChange={(e) => handle(e)}
                  id="email"
                  value={data.email}
                  type="text"
                  placeholder="Email"
                  className="border p-2 rounded w-full shadow-md mb-4 placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="phone"
                  value={data.phone}
                  type="text"
                  placeholder="Phone"
                  className="border p-2 rounded w-full shadow-md mb-4 placeholder:text-gray-500"
                />
                <button
                  // onClick={handleClick}
                  type="submit"
                  id="next"
                  class="px-5 mt-2 text-center justify-items-end py-2 rounded bg-amber-600 text-white hover:bg-amber-800 focus:outline-none transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* </div> */}
      </div>{" "}
      <h1 className="text-gray-500">.</h1>
      {/* </div> */}
    </div>
  );
};
export default PropertyDetails;
