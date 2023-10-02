import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import backImage from "../assets/images/backimg.png";
import { Colors } from "../colors";
import hexToRgba from "hex-to-rgba";
import ReactPlayer from "react-player";
import { useVideoWatching } from "../ContexProvider";

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${backImage});
  background-repeat: no-repeat;
  background-size: contain;
  
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
`;

const WatchContainer = styled.div`
  width: 100%;
  height: 70%;
  position: absolute;
  display: flex;
  z-index: 3;
  bottom: 15px;
  flex-wrap: wrap;
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

  return <BannerContainer ref={containerRef}>
    <WatchContainer>
      <div style={{flex:2,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <TitleVideo style={{backgroundColor:video.color}}>{video.title}</TitleVideo>
        <p style={{fontSize:"18px",color:Colors.graylighter,width:"95%",boxSizing:"border-box"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      <div style={{display:"flex",flex:5}}>
        <div style={{width:"90%",margin:"0 auto",borderRadius:".5rem",backgroundColor:"red",overflow:"hidden"}}>
          <ReactPlayer
            url={video.url}
            controls
            width="100%"
            height="100%" />
        </div>
      </div>
    </WatchContainer>
  </BannerContainer>;
};

