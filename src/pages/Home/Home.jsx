import "./Home.scss";

import MainLayout from "@/layout/MainLayout.jsx";
import HeroBoxContainer from "./Partials/HeroBox.jsx";
import SearchContainer from "./Partials/SearchInput.jsx";
import CategoriesList from "./Partials/Categories.jsx";
import BusinessesList from "./Partials/Businesses.jsx";

const Home = () => {
  return (
    <>
      <MainLayout>
        <HeroBoxContainer />
        <SearchContainer />
        <CategoriesList />
        <BusinessesList />
      </MainLayout>
    </>
  );
};

export default Home;
