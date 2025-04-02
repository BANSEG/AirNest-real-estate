import React, { useState } from 'react';
import hero_img from '../assets/hero2.png';

const Hero = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
  });

  const addProduct = async (e) => {  // ✅ Fixed syntax here
    e.preventDefault();

    try {
      const response = await fetch(
        'https://tight-flor-digitalfortress-c88eb7f5.koyeb.app/coreapi/properties/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Product added:', data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <div className="grid h-screen w-full place-items-center bg-cyan-300 rounded-br-[30%] rounded-bl-[30%]">
        <div className="text-center">
          <h3 className="text-5xl font-semibold mt-14">
            Find Your Dream Home <br /> with Ease
          </h3>
          <img src={hero_img} alt="Hero Image" className="w-[1200px] h-[650px] object-contain -mt-2" />
        </div>
      </div>

      {/* Example Form */}
      <form onSubmit={addProduct} className="text-center mt-8">
        <input
          type="text"
          placeholder="Property Title"
          className="border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          className="border p-2 rounded ml-2"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded ml-2"
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default Hero;
