import React, { useState } from "react";
import ProjectInformation from "./ProjectInformation";
import Devices from "./Devices";
import Filter from "./Filter";
import Sidebar from "../sidebar/Sidebar";
import Regions from "./Regions";
import Specifications from "./Specifications";
import Buttons from "./Buttons";


const Main = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="grid-container">
      <Sidebar />
      <main>
        <div className="main">
          <ProjectInformation />
          <div className="right-section">
            <Devices />
            <Filter />
          </div>
        </div>
        <Regions handleCountryChange={handleCountryChange} />
        <Specifications selectedCountry={selectedCountry} />
        <Buttons />
      </main>
    </div>
  );
};

export default Main;
