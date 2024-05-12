// import React, { useState } from 'react';

// const UploadImage = () => {
//     const [images, setImages] = useState([]);
//     const [dragging, setDragging] = useState(false);

//     const handleDragOver = (e) => {
//         e.preventDefault();
//         setDragging(true);
//     };

//     const handleDragEnter = (e) => {
//         e.preventDefault();
//         setDragging(true);
//     };

//     const handleDragLeave = (e) => {
//         e.preventDefault();
//         setDragging(false);
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         setDragging(false);
//         const files = e.dataTransfer.files;
//         handleFiles(files);
//     };

//     const handleFiles = (files) => {
//         const newImages = [];
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 newImages.push(reader.result);
//                 if (newImages.length === files.length) {
//                     setImages([...images, ...newImages]);
//                 }
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const removeImage = (index) => {
//         const updatedImages = [...images];
//         updatedImages.splice(index, 1);
//         setImages(updatedImages);
//     };

//     return (
//         <div className={`flex flex-col items-center w-full p-4 border ${dragging ? 'border-blue-500' : 'border-gray-300'} rounded-lg`}
//             onDragOver={handleDragOver}
//             onDragEnter={handleDragEnter}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//         >
//             <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-auto cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 mb-4">
//                 <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                     <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
//                     </svg>
//                     <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//                 </div>
//                 <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleFiles(e.target.files)} multiple />
//             </label>

//             <div className="flex flex-wrap justify-center w-full">
//                 {images.map((image, index) => (
//                     <div key={index} className="relative m-2">
//                         <img src={image} alt={`Uploaded ${index + 1}`} className="max-h-48 max-w-48" />
//                         <button
//                             className="absolute top-0 right-0 p-1 text-white rounded-full"
//                             onClick={() => removeImage(index)}
//                         >
//                             &times;
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default UploadImage;

// -------------------------------------------------------------------------------

import React, { useState } from "react";

const UploadImage = ({ onImagesUploaded }) => {
  const [images, setImages] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setImages([...images, ...newImages]);
          onImagesUploaded(newImages); // Call the callback with the array of uploaded image data
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div
      className={`flex flex-col items-center w-full p-4 border ${
        dragging ? "border-blue-500" : "border-gray-300"
      } rounded-lg`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-auto cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 mb-4"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
          multiple
        />
      </label>

      <div className="flex flex-wrap justify-center w-full">
        {images.map((image, index) => (
          <div key={index} className="relative m-2">
            <img
              src={image}
              alt={`Uploaded ${index + 1}`}
              className="max-h-48 max-w-48"
            />
            <button
              className="absolute top-0 right-0 p-1 text-white rounded-full"
              onClick={() => removeImage(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
