import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import ReactPlayer from "react-player";
import styled from 'styled-components';
import { Colors } from '../colors';
import VideoThumbnail from './thumbnail';
import { useSetVideoWatching } from '../ContexProvider';

const CardView = styled.div`
    height: 16rem;
    margin:0 .5rem;
    border: .2rem solid ${({ bdcolor }) => bdcolor};
    border-radius: 5px;
    max-width: 27rem;
    overflow: hidden;
    &:hover{
      cursor: pointer;
    }
  `

const CarouselContainer = styled.div`
  width: 95%;
  margin: 2rem auto;
`
const CarouselTitle = styled.p`
    display: inline-block;
    border-radius: .2rem;
    padding: .4rem .9rem;
    margin:.6rem .5rem;
    font-weight: 400;
    font-size: 3rem;
    color:${Colors.graylighter};
  `

export const MyCarousel = ({ videos }) => {


  // Configura las opciones del carrusel
  const responsive = {
    desktopLarge: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Número de elementos visibles en el escritorio
      partialVisibilityGutter: 50, // Espacio entre los elementos
    },
    desktop: {
      breakpoint: { max: 1400, min: 700 },
      items: 3, // Número de elementos visibles en el escritorio
      partialVisibilityGutter: 40, // Espacio entre los elementos
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2, // Número de elementos visibles en tablet
      partialVisibilityGutter: 30, // Espacio entre los elementos
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Número de elementos visibles en móvil
      partialVisibilityGutter: 20, // Espacio entre los elementos
    }
  };

  const setVideoW = useSetVideoWatching()

  const playVideo =(video) =>{
    setVideoW(video)
  }


  return (
    <CarouselContainer>
      <CarouselTitle style={{ backgroundColor: videos[0].color }}>{videos[0].category}</CarouselTitle>
      <Carousel responsive={responsive}>
        {videos.map((video, index) => (
          <CardView key={index} bdcolor={video.color} onClick={(e)=> playVideo(video)}>
            {/* <ReactPlayer
              url={video.url}
              controls
              width="100%"
              height="100%" /> */}
            <VideoThumbnail url={video.url} />
          </CardView>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};
