import React from "react";

const Devices = () => {
  return (
    <div className="devices">
      <p>DEVICES</p>
      <div className="device_lavel">
        <input type="checkbox"  name="vehicle1" />
        <label for="vehicle1"> Mobile</label> 
        <br />
        <input type="checkbox" name="vehicle2" />
        <label for="vehicle2">Tablet</label>
        <br />
        <input type="checkbox"  name="vehicle3" />
        <label for="vehicle3"> Desktop</label>
        <br />
      </div>
    </div>
  );
};

export default Devices;
