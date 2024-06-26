import React, { createContext, useContext, useState } from 'react';

const initialBusinesses = [
    {
      url: "src/assets/images/business/cleaning-people-taking-care-office.jpg",
      category: "Cleaning",
      name: "Office cleaning",
      person: "Emma Parkinson",
      address: "Park ave 75, New York",
    },
    {
      url: "src/assets/images/business/cleaning-smiley-woman.jpg",
      category: "Cleaning",
      name: "House or office cleaning",
      person: "Elisabeth Smiley",
      address: "Best st. 112-3, London",
    },
    {
      url: "src/assets/images/business/repair-car-shop.jpg",
      category: "Repair",
      name: "Car repair",
      person: "Jack and John Fosters",
      address: "Plain street 100-10, Brussels",
    },
    {
      url: "src/assets/images/business/repair-lex-ger.jpg",
      category: "Repair",
      name: "Ferrari car repair",
      person: "Perry Jr. Hamstron",
      address: "Luxury st. 1-1, Rome",
    },
    {
      url: "src/assets/images/business/painting-pixabay.jpg",
      category: "Painting",
      name: "Residential Painting",
      person: "Alice Walker",
      address: "Maple st. 22, Boston",
    },
    {
      url: "src/assets/images/business/painting-polina.jpg",
      category: "Painting",
      name: "Commercial Painting",
      person: "Bob Ross",
      address: "Painter ave 55, San Francisco",
    },
    {
      url: "src/assets/images/business/transportation-pixabay.jpg",
      category: "Shifting",
      name: "House Moving",
      person: "Charlie Movers",
      address: "Move st. 101, Chicago",
    },
    {
      url: "src/assets/images/business/transportation-quintingellar.jpg",
      category: "Shifting",
      name: "Office Relocation",
      person: "David Transport",
      address: "Location ave 10, Los Angeles",
    },
    {
      url: "src/assets/images/business/plumbing-heiko-ruth.jpg",
      category: "Plumbing",
      name: "Home Plumbing Services",
      person: "Evan Plumber",
      address: "Pipe st. 12, Seattle",
    },
    {
      url: "src/assets/images/business/plumbing-wdnet.jpg",
      category: "Plumbing",
      name: "Commercial Plumbing",
      person: "Frank Waters",
      address: "Waterworks ave 88, Miami",
    },
    {
      url: "src/assets/images/business/electric-brett-sayles.jpg",
      category: "Electric",
      name: "Residential Electrician",
      person: "George Sparks",
      address: "Electric ave 45, Houston",
    },
    {
      url: "src/assets/images/business/electric-heyho.jpg",
      category: "Electric",
      name: "Industrial Electrician",
      person: "Hank Voltage",
      address: "Power st. 5, Detroit",
    },
  ];

  const BusinessesContext = createContext();

export const BusinessesProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState(initialBusinesses);

  const filterBusinessesByCategory = (categoryName) => {
    const filteredList = initialBusinesses.filter(
      (business) => business.category === categoryName
    );
    setBusinesses(filteredList);
  };

  return (
    <BusinessesContext.Provider value={{ businesses, filterBusinessesByCategory }}>
      {children}
    </BusinessesContext.Provider>
  );
};

export const useBusinesses = () => {
  return useContext(BusinessesContext);
};