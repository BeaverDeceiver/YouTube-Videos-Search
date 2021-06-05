import React from "react";

export function VideoItem(props) {
  const { video } = props;
  return (
    <div>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header ">{video.snippet.title}</div>
      </div>
    </div>
  );
}
// export default VideoItem;
