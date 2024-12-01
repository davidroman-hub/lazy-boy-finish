import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Card from "./Card";
import example1 from "../../assets/imgs/example1.png";
import example2 from "../../assets/imgs/example2.png";
import example3 from "../../assets/imgs/example3.png";

const CarouselStore = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  });

  let slides = [
    {
      key: uuidv4(),
      content: <Card imagen={example3} />,
    },
    {
      key: uuidv4(),
      content: <Card imagen={example1} />,
    },
    {
      key: uuidv4(),
      content: <Card imagen={example2} />,
    },
    {
      key: uuidv4(),
      content: <Card imagen={example3} />,
    },
    {
      key: uuidv4(),
      content: <Card imagen={example1} />,
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => setState({ ...state, goToSlide: index }),
    };
  });

  let xDown: number | null = null;
  let yDown: number | null = null;

  const getTouches = (evt: any) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    );
  };

  const handleTouchStart = (evt: any) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt: any) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        setState({ ...state, goToSlide: state.goToSlide + 1 });
      } else {
        setState({ ...state, goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
      } else {
      }
    }

    xDown = null;
    yDown = null;
  };

  return (
    <div
      className="carousel-design-spacer"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="title-carousel-design-spacer">Store</div>
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      ></div>
    </div>
  );
};

export default CarouselStore;
