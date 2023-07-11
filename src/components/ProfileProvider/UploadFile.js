import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const UploadFile = ({ idOrder }) => {
  console.log(idOrder);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  console.log(userEmail);
  console.log(selectedFiles)
  
  useEffect(() => {
    // Fetch user details including email from the MongoDB database
    

    fetchUserDetails();
  }, [idOrder]);
  const fetchUserDetails = async () => {
    try {
      console.log(idOrder);

      const response = await axios.get(`http://localhost:8000/orderemail/${idOrder}`);
      setUserEmail(response.data[0].email);
      console.log(response.data[0].email);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
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
      // Send email to the user
      const templateParams = {
        email: userEmail,
        subject: "Files Received",
        message: "Your files have been successfully received.",
      };

      await emailjs.send(
        "service_0xzkggn",
        "template_gmzfip3",
        templateParams,
        "ySXhwWkA6BxFhzPF1"
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "you have sent the files successfully to users",
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      console.error("Error updating order:", error);
      alert("Error updating order. Please try again.");
    }
  };

  return (
    <div className="ps-3 pe-3">
      <form className="shadow p-3 rounded-3 mb-5 opacity-100 form-P">
        <label
          htmlFor="formFileMultiple2"
          className="form-label text-capitalize"
        >
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
            value="send files"
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
