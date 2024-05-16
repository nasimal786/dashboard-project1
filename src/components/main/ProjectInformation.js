import React from "react";

const ProjectInformation = () => {
  return (
    <div className="project_info">
      <p>PROJECT INFORMATION</p>
      <form>
        <div className="project_row1">
          <div className="form-group">
            <label>Project Name</label>
            <input type="text" placeholder="project name" />
          </div>
          <div className="form-group">
            <label>Work Order No.#</label>
            <input type="text" placeholder="Work Order Number" />
          </div>
        </div>
        <div className="project_row2">
          <div className="form-group">
            <label>Project Type</label>
            <select>
              <option>Please Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select>
              <option>Please Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Client</label>
            <select>
              <option>Please Select</option>
            </select>
          </div>
        </div>
        <div className="project_row2">
          <div className="form-group">
            <label>Client's Contact</label>
            <select>
              <option>Please Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Sales Person</label>
            <select>
              <option>Please Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Project Manager</label>
            <select>
              <option>Please Select</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Project Description</label>
          <textarea placeholder="project description"></textarea>
        </div>
      </form>
    </div>
  );
};

export default ProjectInformation;
