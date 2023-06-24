import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function PaymentGate() {
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
  const newCard = {
    cardholderName: "Anna Doe",
    cardNumber: "1234 5678 1234 5678",
    expire: "MM/YYYY",
    cvv: "CVV",
  };

  return (
    <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
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
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              {savedCards.map((card, index) => (
                <div
                  key={index}
                  className="d-flex flex-row align-items-center mb-4 pb-1"
                >
                  <img className="img-fluid" src={card.logo} alt="" />
                  <div className="flex-fill mx-3">
                    <div className="form-outline">
                      <MDBInput
                        label="Card Number"
                        id={`form${index + 1}`}
                        type="text"
                        size="lg"
                        value={card.cardNumber}
                      />
                    </div>
                  </div>
                  <a href="#!">Remove card</a>
                </div>
              ))}
              <p className="fw-bold mb-4">Add new card:</p>
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                value={newCard.cardholderName}
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                    value={newCard.cardNumber}
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="number"
                    size="lg"
                    placeholder={newCard.expire}
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="number"
                    size="lg"
                    placeholder={newCard.cvv}
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn color="success" size="lg" block>
                Add card
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
