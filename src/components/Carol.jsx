import React from "react";
import Carousel from "react-bootstrap/Carousel";



function Carol(props) {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://disenowebakus.net/en/images/articles/html5-new-tags-effects-behaviors.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3> Rewarding and tons of fun! </h3>{" "}
          <p> Discover the new genre that is Auto-Chess </p>{" "}
        </Carousel.Caption>{" "}
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdvZRpAsHYDL6znSXg22vb1XpdDwV_mfW0w&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3> Action packed gameplay </h3>{" "}
          <p>
            {" "}
            Challenge yourself to intensive tactical combat.{" "}
          </p>{" "}
        </Carousel.Caption>{" "}
      </Carousel.Item>{" "}
    </Carousel>
  );
}

export default Carol;
