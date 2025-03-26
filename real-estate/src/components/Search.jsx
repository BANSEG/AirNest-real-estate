// import React, { useContext } from 'react';
// import { FaDollarSign, FaHome, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
// import { HomeContext } from '../Context/HomeContext';

// const Search = () => {

//   const {homes, country, setCountry, setPrice, price, setProperty, handleSearch} = useContext(HomeContext);

//   return (
//     <div className='absolute flex items-center gap-4 w-[80%] bg-white p-4 rounded-lg -mt-8 ml-28 shadow-md'>

//       {/* Location */}
//       <div className='flex items-center gap-4 p-2 flex-1 border border-gray-300 rounded-lg'>
//         <FaMapMarkerAlt className='text-cyan-500 text-2xl' />
//         <div>
//           <p className='text-gray-800 font-semibold'>Location (any)</p>
//           <select value={country}
//           onChange={(e)  => setCountry(e.target.value)}
//           className='border-none outline-none bg-transparent text-gray-700 w-full mt-1'>
//             <option value="default">Select your place</option>
//             <option value="USA">USA</option>
//             <option value="Canada">Canada</option>
//             <option value="UK">UK</option>
//           </select>
//         </div>
//       </div>

//       {/* Property Type */}
//       <div className='flex items-center gap-4 p-2 flex-1 border border-gray-300 rounded-lg'>
//         <FaHome className='text-cyan-500 text-2xl' />
//         <div>
//           <p className='text-gray-800 font-semibold'>Property type (any)</p>
//           <select value={property}
//           onChange={(e) => setProperty(e.target.value)}
//           className='border-none outline-none bg-transparent text-gray-700 w-full mt-1'>
//             <option value="default">Select your place</option>
//             <option value="Apartment">Apartment</option>
//             <option value="Villa">Villa</option>
//             <option value="House">House</option>
//           </select>
//         </div>
//       </div>

//       {/* Price range */}
//       <div className='flex items-center gap-4 p-2 flex-1 border border-gray-300 rounded-lg'>
//           <FaDollarSign className='text-cyan-500 text-2xl'/> 
//         <div>
//           <p className='text-gray-800 font-semibold'>Price range (any)</p>
//           <select value={price} 
//           onChange={(e) => setPrice(e.target.value)}
//           className='border-none outline-none bg-transparent text-gray-700 w-full mt-1'>
//             <option value="default">Select price range</option>
//             <option value="100000-200000">$100,000 - $200,000</option>
//             <option value="200000-300000">$200,000 - $300,000</option>
//             <option value="300000-400000">$300,000 - $400,000</option>
//             <option value="400000-500000">$400,000 - $500,000</option>
//           </select>
//         </div>
//       </div>

//       {/* Search button */}
//       <button onClick={handleSearch}
//       className='bg-cyan-500 text-white px-6 py-3 rounded-lg cursor-pointer text-xl flex items-center justify-center hover:bg-cyan-700 transition-opacity'>
//         <FaSearch />
//       </button>
//     </div>
    
//   )
// }

// export default Search; 




import React, { useContext } from "react";
import { FaDollarSign, FaHome, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import HomeContext from "../Context/HomeContext"; // Ensure correct import

const Search = () => {
  const {
    homes,
    country,
    setCountry,
    property, // Ensure property is included
    setProperty,
    price,
    setPrice,
    handleSearch,
  } = useContext(HomeContext) || {}; // Prevents crashes if context is undefined

  return (
    <div className="absolute flex items-center gap-4 w-[80%] bg-white p-4 rounded-lg -mt-8 ml-28 shadow-md">
      {/* Location */}
      <div className="flex items-center gap-4 p-2 flex-1 border border-gray-300 rounded-lg">
        <FaMapMarkerAlt className="text-cyan-500 text-2xl" />
        <div>
          <p className="text-gray-800 font-semibold">Location (any)</p>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border-none outline-none bg-transparent text-gray-700 w-full mt-1"
          >
            <option value="">Select your place</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
        </div>
      </div>

      {/* Property Type */}
      <div className="flex items-center gap-4 p-2 flex-1 border border-gray-300 rounded-lg">
        <FaHome className="text-cyan-500 text-2xl" />
        <div>
          <p className="text-gray-800 font-semibold">Property type (any)</p>
          <select
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            className="border-none outline-none bg-transparent text-gray-700 w-full mt-1"
          >
            <option value="">Select property type</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
          </select>
        </div>
      </div>

      {/* Price range */}
      <div className="flex items-center gap-4 p-2 flex-1 border border-gray-300 rounded-lg">
        <FaDollarSign className="text-cyan-500 text-2xl" />
        <div>
          <p className="text-gray-800 font-semibold">Price range (any)</p>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-none outline-none bg-transparent text-gray-700 w-full mt-1"
          >
            <option value="">Select price range</option>
            <option value="100000-200000">$100,000 - $200,000</option>
            <option value="200000-300000">$200,000 - $300,000</option>
            <option value="300000-400000">$300,000 - $400,000</option>
            <option value="400000-500000">$400,000 - $500,000</option>
          </select>
        </div>
      </div>

      {/* Search button */}
      <button
        onClick={handleSearch}
        className="bg-cyan-500 text-white px-6 py-3 rounded-lg cursor-pointer text-xl flex items-center justify-center hover:bg-cyan-700 transition-opacity"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
