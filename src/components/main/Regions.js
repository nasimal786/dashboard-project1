import React, { useState } from "react";

const Regions = ({ handleCountryChange }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelectChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    handleCountryChange(selectedCountry);
  };

  return (
    <div className="regions">
      <p className="regions_p">REGIONS</p>
      <div className="regions_inp">
        <p>Country</p>
        <select value={selectedCountry} onChange={handleSelectChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Nepal">Nepal</option>
          <option value="Brazil">Brazil</option>
        </select>
      </div>
    </div>
  );
};

export default Regions;
