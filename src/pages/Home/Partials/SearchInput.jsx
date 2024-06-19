import "./HeroBox.scss";
import SearchInput from "../../../components/inputs/TextInput.jsx";

const HeroBox = () => {
  return (
    <>
      <main className="main-container-search">
        <div className="container-search">
          <div className="search-box">
            <div className="center-container">
              <SearchInput />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroBox;
