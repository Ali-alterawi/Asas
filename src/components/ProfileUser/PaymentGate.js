import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Button, Modal } from 'react-bootstrap';

export default function PaymentGate() {
  const [newCard, setNewCard] = useState({
    cardholderName: "",
    cardNumber: "",
    expire: "",
    cvv: "",
  });

  const totalAmountDue = "$8245";
  const savedCards = [
    {
      logo: "https://img.icons8.com/color/48/000000/mastercard-logo.png",
      cardNumber: "**** **** **** 3193",
    },
    {
      logo: "https://img.icons8.com/color/48/000000/visa.png",
      cardNumber: "**** **** **** 4296",
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here before submitting the form

    // Example validation for cardholder name
    if (!newCard.cardholderName) {
      alert("Please enter the cardholder's name");
      return;
    }

    // Example validation for card number
    if (!newCard.cardNumber) {
      alert("Please enter the card number");
      return;
    }

    // Example validation for expiration date
    if (!newCard.expire) {
      alert("Please enter the expiration date");
      return;
    }

    // Example validation for CVV
    if (!newCard.cvv) {
      alert("Please enter the CVV");
      return;
    }

    // Form is valid, submit the form
    console.log("Form submitted:", newCard);
  };

  return (
    <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background4.webp)",
      }}
    >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="9" xl="8">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Payment</h3>
              </div>
              <div className="d-flex flex-column">
                <p className="mb-1 small text-primary">Total amount due</p>
                <h6 className="mb-0 text-primary">{totalAmountDue}</h6>
              </div>
              <p className="fw-bold mb-4">Please enter card details:</p>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  label="Cardholder's Name"
                  id="form3"
                  type="text"
                  size="lg"
                  name="cardholderName"
                  value={newCard.cardholderName}
                  onChange={handleInputChange}
                  required
                />
                <MDBRow className="my-4">
                  <MDBCol size="7">
                    <MDBInput
                      label="Card Number"
                      id="form4"
                      type="text"
                      size="lg"
                      name="cardNumber"
                      value={newCard.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="Expire"
                      id="form5"
                      type="number"
                      size="lg"
                      name="expire"
                      value={newCard.expire}
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  <MDBCol size="2">
                    <MDBInput
                      label="CVV"
                      id="form6"
                      type="number"
                      size="lg"
                      name="cvv"
                      value={newCard.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn color="primary" size="lg" block type="submit">
                  PAY
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
