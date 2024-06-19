import "./Home.scss";

import TransparentFixed from "../../components/headers/TransparentFixed/TransparentFixed.jsx";
import HeroBoxContainer from "./Partials/HeroBox.jsx";
import SearchContainer from "./Partials/SearchInput.jsx";

const Home = () => {
  return (
    <>
      <TransparentFixed />
      <HeroBoxContainer />
      <SearchContainer />
    </>
  );
};

export default Home;
