import React, { useState } from "react";
import ProjectInformation from "./ProjectInformation";
import Devices from "./Devices";
import Filter from "./Filter";
import Sidebar from "../sidebar/Sidebar";
import Regions from "./Regions";
import Specifications from "./Specifications";
import Buttons from "./Buttons";

const Main = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    projectInformation: {},
    devices: {},
    filter: {},
  });
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };
  const handleProjectInfoSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      projectInformation: data,
    }));
  };

  const handleDevicesSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      devices: data,
    }));
  };

  const handleFilterSubmit = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      filter: data,
    }));
  };
  const handleSubmit = () => {
    const combinedFormData = {
      projectInformation: formData.projectInformation,
      devices: formData.devices,
      filter: formData.filter,
    };
    console.log(combinedFormData)
  };

  return (
    <div className="grid-container">
      <Sidebar />
      <main>
        <button>
          <i class="fa-solid fa-arrow-left"></i>
          Back
        </button>
        <div className="main">
          <ProjectInformation onFormSubmit={handleProjectInfoSubmit} />
          <div className="right-section">
            <Devices onFormSubmit={handleDevicesSubmit} />
            <Filter onFormSubmit={handleFilterSubmit} />
          </div>
        </div>
        <Regions handleCountryChange={handleCountryChange} />
        <Specifications selectedCountry={selectedCountry} />
        <Buttons onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default Main;
