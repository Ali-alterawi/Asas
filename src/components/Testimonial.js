import Carousel from "react-bootstrap/Carousel";
import p1 from "../images/testimalion1.jpg";
import p2 from "../images/testimalion2.jpg";
import p3 from "../images/testimalion3.jpg";
import "../Css/Testimonial.css";
function Testimonial() {
  return (
    <div className="sliderx">
        <h1 className="text-center text-white">Trusted by hundreds of Happy Customer</h1>
      <Carousel className="container">
        <Carousel.Item interval={5000}>
            <img src={p1} alt="First slide" />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <span className="fw-bold">C.E.O IEMAR</span>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img src={p2} alt="Second slide" />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="fw-bold">C.E.O BIN LADEN</span>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img src={p3} alt="third slide" />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="fw-bold">U.S President</span>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonial;
