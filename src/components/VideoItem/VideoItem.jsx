import React from 'react';

export function VideoItem(props) {
  const { video } = props;
  return (
    <>
      <img
        className="video__image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="video__content">
        <div className="header ">{video.snippet.title}</div>
      </div>
    </>
  );
}
// export default VideoItem;
