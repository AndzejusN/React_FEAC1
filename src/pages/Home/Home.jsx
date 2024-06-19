import "./Home.scss";

import TransparentFixed from "../../components/headers/TransparentFixed/TransparentFixed.jsx";

const Index = () => {
  return (
    <>
      <TransparentFixed />
      <main className="main-container-advantages">
        <div className="container-advantages">
          <div className="hero-box">
            <div className="center-container">
              <div className="hero-box-all box-left-top">
                <h3 className="years-in-business"></h3>
              </div>
              <div className="hero-box-all box-right-top">
                <h3 className="millions-of-km"></h3>
              </div>
              <div className="hero-box-all box-left-bottom">
              </div>
              <div className="hero-box-all box-right-bottom">
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
