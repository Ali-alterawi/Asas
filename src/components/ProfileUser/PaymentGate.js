import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function PaymentGate({ UserId }) {
  const [userOrders, setUserOredrs] = useState([]);
  const { idOrder } = useParams();
  // console.log(UserId);
  const fetchAllOrdersById = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/order/${UserId}/${idOrder}`
      );

      setUserOredrs(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    fetchAllOrdersById();
  }, []);

  const [newCard, setNewCard] = useState({
    cardholderName: "",
    cardNumber: "",
    expire: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    cardholderName: "",
    cardNumber: "",
    expire: "",
    cvv: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setErrors({
      cardholderName: "",
      cardNumber: "",
      expire: "",
      cvv: "",
    });
    
    if (!newCard.cardholderName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardholderName: "Please enter the cardholder's name",
      }));
      return;
    }
  
    if (!newCard.cardNumber) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardNumber: "Please enter the card number",
      }));
      return;
    }
  
    if (newCard.cardNumber.length !== 16) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardNumber: "Please enter a valid 16-digit card number",
      }));
      return;
    }
  
    if (!newCard.expire) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        expire: "Please enter the expiration date",
      }));
      return;
    }
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
  
    const [enteredMonth, enteredYear] = newCard.expire.split("/");
    const trimmedMonth = parseInt(enteredMonth.trim(), 10);
    const trimmedYear = parseInt(enteredYear.trim(), 10);
  
    if (
      trimmedYear < currentYear ||
      (trimmedYear === currentYear && trimmedMonth < currentMonth)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        expire: "Please enter a valid expiry date",
      }));
      return;
    }
  
    if (!newCard.cvv) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cvv: "Please enter the CVV",
      }));
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:8000/paymentOne", {
        cardholderName: newCard.cardholderName,
        cardNumber: newCard.cardNumber,
        expire: newCard.expire,
        cvv: newCard.cvv,
        price: userOrders[0].number,
        orderID: idOrder,
      });
      console.log("Payment submitted:", response.data);
      console.log(response.data);
      try{
        await axios.put(
          `http://localhost:8000/order/${UserId}/${idOrder}`
        );
        setNewCard({
          cardholderName: "",
          cardNumber: "",
          expire: "",
          cvv: "",
        });
        console.log("state of payment has been updated");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'your order status has been changed to be paid',
          showConfirmButton: false,
          timer: 3000
        });
      }
      catch(err){
        console.error("Error change state of payment:", err);
      }
    } catch (error) {
      console.error("Error submitting payment:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCard({ ...newCard, [name]: value });
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
        <MDBCol md="11" lg="10" xl="9">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Payment</h3>
              </div>
              <div className="d-flex flex-column">
                {userOrders.map((order) => (
                  <div key={order.number}>
                    <p className="mb-1 small text-primary">Total amount</p>
                    <h6 className="mb-0 text-primary">{order.number}</h6>
                  </div>
                ))}
              </div>
              <p className="fw-bold mb-4">Please enter card details:</p>
              <form onSubmit={handleSubmit}>
                {errors.cardholderName && (
                  <p className="text-danger">{errors.cardholderName}</p>
                )}
                <MDBInput
                  label="Cardholder's Name"
                  id="form3"
                  type="text"
                  size="lg"
                  name="cardholderName"
                  placeholder="cardholderName"
                  value={newCard.cardholderName}
                  onChange={handleInputChange}
                  required
                />
                {errors.cardNumber && (
                  <p className="text-danger">{errors.cardNumber}</p>
                )}
                <MDBRow className="my-4">
                  <MDBCol size="7">
                    <MDBInput
                      label="Card Number"
                      id="form4"
                      type="text"
                      size="lg"
                      name="cardNumber"
                      placeholder="1234 5678 1234 5678"
                      value={newCard.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  {errors.expire && (
                    <p className="text-danger">{errors.expire}</p>
                  )}
                  <MDBCol size="3">
                    <MDBInput
                      label="Expire"
                      id="form5"
                      type="text"
                      size="lg"
                      name="expire"
                      placeholder="08/23"
                      value={newCard.expire}
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  {errors.cvv && <p className="text-danger">{errors.cvv}</p>}
                  <MDBCol size="2">
                    <MDBInput
                      label="CVV"
                      id="form6"
                      type="text"
                      size="lg"
                      name="cvv"
                      placeholder="123"
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
