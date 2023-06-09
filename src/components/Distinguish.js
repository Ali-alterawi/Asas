import React from "react";
import "../Css/Distinguish.css"

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
                  <i class="fa-solid fa-2 position-absolute bottom-0 number"></i>
                  <i class="fa-solid fa-message fa-4x position-absolute bottom-0 icon"></i>
                </div>
                <h4 class="mb-3 mt-3 text-uppercase">Response with 48hours</h4>
                <p class="text-black-50 lh-lg">
                  Get a first response within 48 hours with an initial cost,
                  except Public holidays and Official holidays.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="feat">
                <div class="icon-holder position-relative">
                  <i class="fa-solid fa-3 position-absolute bottom-0 number"></i>
                  <i class="fa-solid fa-calculator fa-4x position-absolute bottom-0 icon"></i>
                </div>
                <h4 class="mb-3 mt-3 text-uppercase">Auto-calculator</h4>
                <p class="text-black-50 lh-lg">
                  Calculate the cost by using our online calculator, it will
                  save you time and let you expect the initial value.
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
