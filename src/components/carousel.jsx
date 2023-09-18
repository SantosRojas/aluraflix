import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactPlayer from "react-player";
import styled from 'styled-components';

export const MyCarousel = ({ videos }) => {

  const CardView = styled.div`
    height: 16rem;
    margin:.4rem .5rem;
    border-radius: 5px;
    max-width: 27rem;
    overflow: hidden;
  `
  // Configura las opciones del carrusel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Número de elementos visibles en el escritorio
      partialVisibilityGutter: 40, // Espacio entre los elementos
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // Número de elementos visibles en tablet
      partialVisibilityGutter: 30, // Espacio entre los elementos
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Número de elementos visibles en móvil
      partialVisibilityGutter: 20, // Espacio entre los elementos
    },
  };

  // Configura los ID de los videos de YouTube que deseas mostrar


  // const opts = {
  //   height: '100%',
  //   width: '100%',
  // };

  return (
    <>
      <h1>{videos[0].category}</h1>
      <Carousel responsive={responsive}>
        {videos.map((video, index) => (
          <CardView key={index}>
            <ReactPlayer
              url={video.url}
              controls
              width="100%"
              height="100%" />
          </CardView>
        ))}
      </Carousel>
    </>
  );
};
