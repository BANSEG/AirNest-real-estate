import { useEffect, useState } from "react";


import React, { createContext } from 'react';


export const HomeContext = createContext()

import { properties } from '../data';

const HomeContextProvider = ({ children }) => {

    const [homes, setHomes] = useState(properties)

    const isDefault = (value) => value === 'default';

    const [country, setCountry] = useState("default")
    const [property, setProperty] = useState("default")
    const [price, setPrice] = useState("default")
    const [filteredHouses, setFilteredHouses] = useState([])

   // Function to filter home based on user selection
   const handleSearch = () => {
        const [minPrice, maxPrice] = price !== "default" ? price.split(",").map(Number) : [0, Infinity]

        const newHouses = homes.filter((house) => {

            const housePrice = parseInt(house.price)

            if(
                housePrice.country === country &&
                house.property === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {
                return house
            }

            if(isDefault(country) && isDefault(property) && isDefault(price)){
                return house
            }

            if(!isDefault(country) && isDefault(property) && isDefault(price)){
                return house.country === country
            }

            if(isDefault(country) && !isDefault(property) && isDefault(price)){
                return house.property === property
            }

            if(isDefault(country) && isDefault(property) && !isDefault(price)){
                return housePrice >= minPrice && housePrice <= maxPrice
            }

            if(!isDefault(country) && !isDefault(property) && isDefault(price)){
                return house.country === country && house.property === property
            }

            if(!isDefault(country) && isDefault(price) && !isDefault(property)){
                return house.country === country && housePrice >= minPrice && housePrice <= maxPrice
            }

            if(isDefault(country) &&!isDefault(property) && isDefault(price)){
                return house.property === property && housePrice >= minPrice && housePrice <= maxPrice
            }

            return false;


        })

        setFilteredHouses(newHouses)
 
   }

   useEffect(()=> {
        if(filteredHouses.length === 0) setFilteredHouses(homes.slice(0, 6))
        }, [homes, filteredHouses])

    return (
        <HomeContext.Provider value={{homes, country, setCountry, price, setPrice, property, setProperty, handleSearch, filteredHouses}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider; 