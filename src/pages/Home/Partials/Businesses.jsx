import React from 'react';
import { useBusinesses } from "@/context/BusinessesContext.jsx";
import "./Businesses.scss";

const Businesses = () => {
  const { businesses } = useBusinesses();

  return (
    <main className="main-container-businesses">
      <div className="container-businesses">
        <div className="businesses-box">
          <div className="center-container">
            {businesses.map((business, index) => (
              <div
                key={index}
                className="businesses-container"
              >
                {business.url && (
                  <img
                    src={business.url}
                    alt={business.name}
                    className="business-image"
                  />
                )}
                {business.category && (
                  <div className="businesses-category">
                    <p>{business.category}</p>
                  </div>
                )}
                {business.name && (
                  <p className="businesses-name">
                    <span>Detailed information: </span>
                    {business.name}
                  </p>
                )}
                {business.person && (
                  <p className="businesses-person">
                    <span>Person name: </span>
                    {business.person}
                  </p>
                )}
                {business.address && (
                  <p className="businesses-address">
                    <span>Registration address: </span>
                    {business.address}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Businesses;
