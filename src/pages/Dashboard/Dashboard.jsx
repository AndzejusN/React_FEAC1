import "./Dashboard.scss";

import TransparentFixed from "../../components/headers/TransparentFixed/TransparentFixed.jsx";

const Dashboard = () => {
  return (
    <>
      <TransparentFixed />
      <main className="main-container-advantages">
        <div className="container-advantages">
          <p>Jūs prisijungėte!</p>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
