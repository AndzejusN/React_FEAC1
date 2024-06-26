import "./Services.scss";

import MainLayout from "@/layout/MainLayout.jsx";
import CategoriesList from "@/pages/Home/Partials/Categories.jsx";
import BusinessesList from "@/pages/Home/Partials/Businesses.jsx";

const Services = () => {
  return (
    <MainLayout>
      <div className="spacer"></div>
      <CategoriesList />
      <BusinessesList />
    </MainLayout>
  );
};

export default Services;
