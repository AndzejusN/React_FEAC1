import "./MainLayout.scss";
import Header from "@/components/headers/TransparentFixed/TransparentFixed";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-container">
        {children}
        </main>
    </>
  );
};

export default MainLayout;
