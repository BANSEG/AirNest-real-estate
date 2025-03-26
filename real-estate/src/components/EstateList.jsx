import React, { useContext } from "react";
import { HomeContext } from '../Context/HomeContext'
import { Link } from 'react-router-dom'


const EstateList = () => {
  const { filteredHouses } = useContext(HomeContext);
  return (
    <div className=" mt-30">
      {/* Header section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">Featured Properties</h2>
        <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
        As we continue to lead the line in providing affordable housing all across the country and beyond, we are indeed honored to play a vital role in fueling your dreams of owning a house through innovation and trust worthy services, which encapsulates our real estate philosophy.
        </p>
      </div>
      {/* Property list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12 place-items-center">
        {
          filteredHouses.map((home) => (
          <div key={home.id} className="bg-white rounded-lg shadow-lg max-w-sm overflow-hidden transition-transform hover:scale-105">
            <img src={home.image} alt="" className="w-full h-72 object-cover rounded-tr-[100px] rounded-bl-[100px]" />
            <div>
              <p className="text-gray-500">{home.country}</p>
              <Link to={`home/${home.id}`} key={home.id}>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2 hover:text-cyan-500 transition">{home.name} </h3>
              </Link>
              <p className="text-2xl text-cyan-500 font-semibold mt-2">${home.price} </p>
              <div className="flex justify-between text-gray-600 text-sm mt-4">
                <span>{home.beds}Beds</span>
                <span>{home.baths}Baths</span>
              </div>
            </div>
          </div>
        ))
        };
        
      </div>
    </div>
  );
};

export default EstateList;


