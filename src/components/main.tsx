import { FC } from "react";
import lazyboyimg from "../assets/imgs/lazypunch.png";
import Marquee from "./marquee/Marque";
import About from "./about/About";
import CarouselStore from "./storeCarousel/Carousel2";

const Main: FC<any> = () => {
  return (
    <div id="main" className="second-section">
      <img src={lazyboyimg} className="lazyboy-center-img" alt="lazyboy" />
      <div className="test">
        <div className="box top" />
        <div className="box bottom green" />
        <div className="box bottom2 golden" />
        <div className="box bottom3 white" />
        <div className="box bottom2 golden" />
        <div className="box bottom4 red" />
        <div className="box bottom5 white" />
      </div>

      <div className="containter-store-more">
        <Marquee />
        {CarouselStore()}
        <About />
      </div>
    </div>
  );
};

export default Main;
