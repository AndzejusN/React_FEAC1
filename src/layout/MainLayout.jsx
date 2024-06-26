import React from "react";
import "./MainLayout.scss";
import Header from "@/components/headers/TransparentFixed/TransparentFixed";
import { BusinessesProvider } from "@/context/BusinessesContext.jsx";

const MainLayout = ({ children }) => {
  return (
    <BusinessesProvider>
      <Header />
      <main className="main-container">{children}</main>
    </BusinessesProvider>
  );
};

export default MainLayout;
