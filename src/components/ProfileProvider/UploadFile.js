import React, { useState } from "react";
import axios from "axios";

const UploadFile = ({ idOrder }) => {
    console.log(idOrder);
  const [selectedFiles, setSelectedFiles] = useState([]);
console.log(selectedFiles);
  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFiles.length === 0) {
      alert("No files selected");
      return;
    }

    const formData = new FormData();
    Array.from(selectedFiles).forEach((file) => {
      formData.append("images", file);
    });

    try {
      await axios.put(`http://localhost:8000/order/${idOrder}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Order updated successfully");
    } catch (error) {
      console.error("Error updating order:", error);
      alert("Error updating order. Please try again.");
    }
  };

  return (
    <div>
      <form className="shadow p-3 rounded-4 mb-5 opacity-100 form-P">
        <label htmlFor="formFileMultiple2" className="form-label text-capitalize">
          Upload a file
        </label>
        <input
          className="form-control"
          type="file"
          id="formFileMultiple2"
          multiple
          onChange={handleFileChange}
        />
        <div className="d-flex justify-content-center py-3">
          <input
            type="submit"
            value="Submit"
            id="submit"
            className="w-100 calculator"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default UploadFile;
