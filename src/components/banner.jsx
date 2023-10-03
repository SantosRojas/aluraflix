import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Colors } from "../colors";
import hexToRgba from "hex-to-rgba";
import ReactPlayer from "react-player";
import { useVideoWatching } from "../ContexProvider";


const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${(props) => props.bacimg || ""});
  background-repeat: no-repeat;
  background-size: cover;
  
  &::before {
    content: "";
    background-color: ${hexToRgba(Colors.primary, 0.3)};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  @media screen and (max-width: 720px){
    background-image: none;
    margin: 1rem 0;
    &::before {
    top: -1rem;
    left: 0;
    right: 0;
    bottom: -1rem;
    z-index: 1;
  }
  }
`;

const WatchContainer = styled.div`
  width: 100%;
  height: 70%;
  position: absolute;
  display: flex;
  z-index: 3;
  bottom: 15px;
  flex-wrap: wrap;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    height: 100%;
    bottom: 0;
  }
`

const TitleVideo = styled.p`
  color: ${Colors.graylighter};
  padding: .4rem 1rem;
  border-radius: .3rem;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
  width: 95%;
  box-sizing: border-box;
`

const DescriptionVideo = styled.p`
  font-size: 18px;
  color: ${Colors.graylighter};
  width: 95%;
  box-sizing: border-box;
  background-color: rgba(0,0,0,.7);
  padding: .5rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 5px 7px rgba(0,0,0,.3);
`

const VideoContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: .5rem;
  background-color: rgba(0,0,0,.3);
  overflow: hidden;
  box-shadow: 0 0 5px 8px rgba(0,0,0,.4);
`

const DescriptionContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    display: none;
  }
`
const aspectRatio = 832 / 1440;

export const Banner = () => {
  const containerRef = useRef(null);

  const calculateHeight = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      return containerWidth * aspectRatio;
    }
    return 0;
  };

  useEffect(() => {
    const setHeight = () => {
      const desiredHeight = calculateHeight();
      containerRef.current.style.height = `${desiredHeight}px`;
    };

    setHeight();
    window.addEventListener("resize", setHeight);

    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  const video = useVideoWatching()

  const videoId = video.url.split('v=')[1];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return <BannerContainer ref={containerRef} bacimg = {thumbnailUrl}>
    <WatchContainer id="video-watching">
      <DescriptionContainer>
        <TitleVideo style={{ backgroundColor: video.color }}>{video.title}</TitleVideo>
        <DescriptionVideo>{video.description} </DescriptionVideo>
      </DescriptionContainer>
      <div style={{ display: "flex", flex: 6 }}>
        <VideoContainer>
          <ReactPlayer
            url={video.url}
            controls
            width="100%"
            height="100%" 
            playing={true} />
        </VideoContainer>
      </div>
    </WatchContainer>
  </BannerContainer>;
};

