import "./Home.scss";


import TransparentFixed from "@/components/headers/TransparentFixed/TransparentFixed.jsx";
import HeroBoxContainer from "./Partials/HeroBox.jsx";
import SearchContainer from "./Partials/SearchInput.jsx";
import CategoriesList from "./Partials/Categories.jsx";
import BusinessesList from "./Partials/Businesses.jsx";

const Home = () => {
  return (
    <>
      <TransparentFixed />
      <HeroBoxContainer />
      <SearchContainer/> 
      <CategoriesList />
      <BusinessesList />
    </>
  );
};

export default Home;
