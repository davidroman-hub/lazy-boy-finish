import React from "react";
import "video.js/dist/video-js.css";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselVideos = () => {
  interface VideoCarac {
    key: string;
    url: string;
  }
  const videos = [
    {
      key: uuidv4(),
      url: "https://www.youtube.com/embed/6RPrnAzxlQ4?si=glLxXUC1zYwqs6KA",
    },
    {
      key: uuidv4(),
      url: "https://youtu.be/xRIro9SJ1Lc?si=eM9gvgzO0Eso6DBl",
    },
    {
      key: uuidv4(),
      url: "https://youtu.be/yA3816rpcRQ?si=JrlEOXrLGikXsj4f",
    },
  ] as any;

  const YoutubeSlide = ({
    url,
    isSelected,
  }: {
    url: string;
    isSelected?: boolean;
  }) => <ReactPlayer width="100%" url={url} playing={isSelected} />;

  return (
    <div className="shorts-container">
      <div
        className="title-carousel-design-spacer"
        style={{ marginLeft: "46px" }}
      >
        Shorts
      </div>

      <Carousel
        className="crsl"
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
        interval={undefined}
      >
        {videos.map((videos: VideoCarac) => {
          return <YoutubeSlide key={videos.key} url={videos.url} />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselVideos;
