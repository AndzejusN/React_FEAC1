import React from 'react';
import './Categories.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useBusinesses, BusinessesProvider } from "@/context/BusinessesContext";
import {
  faBroom,
  faTools,
  faPaintRoller,
  faTruck,
  faWrench,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  const { filterBusinessesByCategory } = useBusinesses();

  const categoriesList = [
    {
      img: faBroom,
      color: "violet",
      name: "Cleaning",
    },
    {
      img: faTools,
      color: "orange",
      name: "Repair",
    },
    {
      img: faPaintRoller,
      color: "green",
      name: "Painting",
    },
    {
      img: faTruck,
      color: "red",
      name: "Shifting",
    },
    {
      img: faWrench,
      color: "darkorange",
      name: "Plumbing",
    },
    {
      img: faBolt,
      color: "blueviolet",
      name: "Electric",
    },
  ];

  const handleClick = (categoryName) => {
    filterBusinessesByCategory(categoryName);
  };

  return (
    <main className="main-container-categories">
      <div className="container-categories">
        <div className="categories-box">
          <div className="center-container">
            {categoriesList.map((category, index) => (
              <div
                key={index}
                className="category-container"
                onClick={() => handleClick(category.name)}
              >
                {category.img && (
                  <FontAwesomeIcon
                    icon={category.img}
                    style={{ color: category.color }}
                    className="fa-icon"
                  />
                )}
                <h1>{category.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Categories;
