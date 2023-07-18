import React from "react";
import "../Css/Distinguish.css";

const Distinguish = () => {
  return (
    <>
      <div class="features text-center pt-5 pb-5">
        <div class="container">
          <div class="main-title mt-5 mb-5 position-relative">
            <h2>What distinguishes us from others ?</h2>
            <p class="text-black-50 text-uppercase">
              Some Of These Our features below
            </p>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="feat">
                <div class="icon-holder position-relative">
                  <i class="fa-solid fa-1 position-absolute bottom-0 number"></i>
                  <i class="fa-sharp fa-solid fa-envelope fa-4x position-absolute bottom-0 icon"></i>
                </div>
                <h4 class="mb-3 mt-3 text-uppercase">notification by email</h4>
                <p class="text-black-50 lh-lg">
                  Get an email when your order is completed
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="feat">
                <div class="icon-holder position-relative">
                  <i class="fa-solid fa-2 position-absolute bottom-0 number"></i>
                  <i class="fa-solid fa-money-bill-1-wave fa-4x position-absolute bottom-0 icon"></i>
                </div>
                <h4 class="mb-3 mt-3 text-uppercase">Secure your money</h4>
                <p class="text-black-50 lh-lg">
                  Guarantee to get your order and if the other party fails to
                  commit to our agreement, we will cover all your money.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="feat">
                <div class="icon-holder position-relative">
                  <i class="fa-solid fa-3 position-absolute bottom-0 number"></i>
                  <i class="fa-solid fa-calculator fa-4x position-absolute bottom-0 icon"></i>
                </div>
                <h4 class="mb-3 mt-3 text-uppercase">Fixed preice</h4>
                <p class="text-black-50 lh-lg">
                  We guarantee to keep the same price from the start
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Distinguish;
