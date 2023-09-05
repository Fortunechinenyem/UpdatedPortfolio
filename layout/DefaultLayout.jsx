import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
