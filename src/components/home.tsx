import { FC } from "react";
import Header from "./header";
import Footer from "./Footer";
import Main from "./main";
import CarouselVideos from "./youtubeCarousel/CarouselVideos";

const Home: FC<any> = () => {
  return (
    <div>
      <Header />
      <Main />
      <CarouselVideos />
      <Footer />
    </div>
  );
};

export default Home;
