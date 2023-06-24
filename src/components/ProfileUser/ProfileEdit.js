import React from "react";

const ProfileEdit = () => {
  return (
    <div className="Main Sidebar my-3 border rounded-4">
      
        <form class="">
          <h1 class="my-4">Edit Profile</h1>

          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Please enter your Email</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingUserName"
              placeholder="Create User name"
            />
            <label for="floatingUserName">Create User name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingPhoneNumber"
              placeholder="Contact number"
            />
            <label for="floatingPhoneNumber">Contact number</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="mb-3">
            <label for="formFileMultiple" class="form-label text-capitalize">
              Upload your photo:
            </label>
            <input class="form-control" type="file" id="formFileMultiple" />
          </div>
          <button class="calculator" type="submit">
            Save
          </button>
          <button class="calculator ms-3">Cancel</button>
        </form>
      </div>
  );
};

export default ProfileEdit;
