import React from 'react';
import styled from 'styled-components';

const ImageT = styled.img`
  width: 100%;
  height: 100%;
`
const VideoThumbnail = ({ url}) => {
  const videoId = url.split('v=')[1];
  const thumbnailUrl = `http://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <ImageT src={thumbnailUrl} alt="Video Thumbnail" />
  );
};

export default VideoThumbnail;
