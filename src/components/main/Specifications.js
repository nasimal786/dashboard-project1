import React, { useState } from "react";

const Specifications = ({ selectedCountry }) => {
  const [rows, setRows] = useState([
    {
      id: 1,
      language: "",
      targetGroup: "",
      cpi: "",
      loi: "",
      ir: "",
      complete: false,
    },
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      language: "",
      targetGroup: "",
      cpi: "",
      loi: "",
      ir: "",
      complete: false,
    };
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  // Mapping of languages based on selected country
  const languageMap = {
    India: "Hindi",
    China: "Chinese",
    Nepal: "Nepali",
    Brazil: "Portuguese",
  };

  return (
    <div className="specifications">
      <p>SPECIFICATIONS</p>
      <div className="specifications_table">
        <table>
          <thead>
            <tr>
              <th>Sel.</th>
              <th>Country</th>
              <th>Language</th>
              <th>Target Group</th>
              <th>CPI($)</th>
              <th>LOI(MIN.)</th>
              <th>IR(%)</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{selectedCountry}</td>
                <td>{languageMap[selectedCountry]}</td>
                <td className="add_rmv_btn">
                  <input
                    type="text"
                    value={row.targetGroup}
                    onChange={(e) =>
                      handleInputChange(row.id, "targetGroup", e.target.value)
                    }
                  />
                  <span className="add" onClick={() => handleAddRow()}>+</span>
                  <span className="remove" onClick={() => handleRemoveRow(row.id)}>x</span>
                </td>
                <td>
                  <input
                    type="text"
                    className="spe_inp"
                    value={row.cpi}
                    onChange={(e) =>
                      handleInputChange(row.id, "cpi", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="spe_inp"
                    value={row.loi}
                    onChange={(e) =>
                      handleInputChange(row.id, "loi", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="spe_inp"
                    value={row.ir}
                    onChange={(e) =>
                      handleInputChange(row.id, "ir", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="spe_inp"
                    checked={row.complete}
                    onChange={(e) =>
                      handleInputChange(row.id, "complete", e.target.checked)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Specifications;
