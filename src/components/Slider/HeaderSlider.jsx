import React from "react";
import { Carousel, Button } from "react-bootstrap";

const HeaderSlider = () => {
  return (
    <Carousel variant="dark" style={{ maxWidth: "100%" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "100vh", objectFit: "cover" }}
          src="../../../public/img/slider/pure-pu-ladies-shoulder-bag.png"
          alt=""
        />
        <Carousel.Caption className="bg-white">
          <h5>Summer collection Pure pu ladies shoulder bags</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
            esse?
          </p>
          <div className="mb-3">
            <Button variant="dark">Shop Now</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "100vh", objectFit: "cover" }}
          src="../../../public/img/slider/young-handsome-guy-smart-suit.png"
          alt=""
        />
        <Carousel.Caption className="bg-white">
          <h5>Summer collection Pure pu ladies shoulder bags</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
            esse?
          </p>
          <div className="mb-3">
            <Button variant="dark">Shop Now</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "100vh", objectFit: "cover" }}
          src="../../../public/img/slider/blender-fruits-kitchen-space.png"
          alt=""
        />
        <Carousel.Caption className="bg-white">
          <h5>Summer collection Pure pu ladies shoulder bags</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
            esse?
          </p>
          <div className="mb-3">
            <Button variant="dark">Shop Now</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderSlider;
