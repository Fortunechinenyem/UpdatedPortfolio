import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ThemeToggle from "@/app/components/ThemeToggle"; // Import the ThemeToggle component
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <div className="container mx-auto p-4">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
