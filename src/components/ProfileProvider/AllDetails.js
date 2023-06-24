import React from "react";

const AllDetails = () => {
  return (
    <>
    <div className="Main Sidebar my-3 border rounded-4">
      <div class="card text-dark bg-light my-3" style={{ maxWidth: "18rem;" }}>
        <div class="card-header">Details</div>
        <div class="card-body">
          <h5 class="card-title">Applicant's Name:</h5>
          <p class="card-text">Abd alrahman </p>
          <h5 class="card-title">Mobile Number:</h5>
          <p class="card-text">0777777777</p>
          <h5 class="card-title">E-mail:</h5>
          <p class="card-text"> alrahman@gmail.com </p>
          <h5 class="card-title">Services:</h5>
          <p class="card-text">Engineering Design</p>
          <h5 class="card-title">Services Providers:</h5>
          <p class="card-text">KD Engineering</p>
          <h5 class="card-title">Kind Of Service:</h5>
          <p class="card-text">Electrical Plan</p>
          <h5 class="card-title">Description of cleint:</h5>
          <p class="card-text">
            amckmsk mamkiamd kimadmakm mkamdkm madmxkam nimakxmd kmkax
          </p>
          <h5 class="card-title">Total Area Building:</h5>
          <p class="card-text">1669 m^2</p>
          <h5 class="card-title">Payment Stauts:</h5>
          <p class="card-text">Paid</p>
          <h5 class="card-title">Price:</h5>
          <p class="card-text">1400 JOD</p>
          <h5 class="card-title">Order Stauts:</h5>
          <p class="card-text">Completed</p>
        </div>
        <div>
          <form className="shadow p-3 rounded-4 mb-5 opacity-100 form-P">
            <label for="formFileMultiple2" class="form-label text-capitalize">
              Upload a file
            </label>
            <input
              class="form-control"
              type="file"
              id="formFileMultiple2"
              multiple
            />
            <div class="d-flex justify-content-center py-3">
              <input
                type="submit"
                value="Submit"
                id="submit"
                className="w-100 calculator"
              />
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default AllDetails;
