import "./SearchInput.scss";
import SearchInputText from "@/components/inputs/TextInput.jsx";
import SearchButton from "@/components/buttons/PrimaryButton.jsx";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <main className="main-container-search">
      <div className="container-search">
        <div className="search-box">
          <div className="center-container">
            <SearchInputText type="text" className="rounded-full text-2xl px-5 py-3 w-full md:w-1/2 lg:w-2/3 xl:w-1/2" placeholder="Search" />
            <div className="rounded-full h-16 w-16 flex items-center justify-center m-8">
              <SearchButton className="bg-primary text-white w-full h-full rounded-full flex items-center justify-center">
                <BsSearch className="icon-large text-2xl" />
              </SearchButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchInput;
