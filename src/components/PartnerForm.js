import React from "react";

const PartnerForm = () => {
  return (
    <>
      <div className="Partner-bg">
        <div class="form-login mb-5  d-flex justify-content-center flex-column align-items-center">
          <form class="shadow p-3 rounded-4 mb-5 opacity-100 form-P">
            <h4 class="py-3">If you would like to become part of us</h4>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingName"
                placeholder="your name"
              />
              <label for="floatingName">Company Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="text"
                class="form-control"
                id="floatingPhone"
                placeholder="079********"
              />
              <label for="floatingPhone">Phone number</label>
            </div>
            <label for="" class="h4">
              Services:
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Quantity serving
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Engineering Design
              </label>
            </div>
            <div class="form-check mb-5">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Interior Design
              </label>
            </div>
            <div class="mb-3">
              <label for="formFileMultiple" class="form-label text-capitalize">
              Upload commercial register or any documentation that supports your application:
              </label>
              <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div>
            {/* <!-- text area --> */}
            <div class="input-group mb-5">
              <span class="input-group-text">Message</span>
              <textarea
                class="form-control"
                aria-label="With textarea"
                placeholder="A few words about your company/office"
              ></textarea>
            </div>
            <button class="w-100 calculator" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PartnerForm;
