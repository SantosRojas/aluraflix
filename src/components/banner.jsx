import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import backImage from "../assets/images/backimg.png";
import { Colors } from "../colors";
import hexToRgba from "hex-to-rgba";

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

  return <BannerContainer ref={containerRef}></BannerContainer>;
};

