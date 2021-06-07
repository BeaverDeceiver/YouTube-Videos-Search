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
        <h1 className="video__title">{video.snippet.title}</h1>
        <h3 className="video__publishedAt">
          {new Date(video.snippet.publishedAt).toLocaleDateString()}
        </h3>
        <h3 className="video__channel">{video.snippet.channelTitle}</h3>
        <h3 className="video__description">{video.snippet.description}</h3>
      </div>
    </>
  );
}
