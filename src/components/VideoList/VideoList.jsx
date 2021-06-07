import React from 'react';
import { useSelector } from 'react-redux';
import { VideoItem } from '../VideoItem/VideoItem';
import { selectVideos } from '../../store/selectors/selectors';

export function VideoList() {
  const videos = useSelector(selectVideos);

  return (
    <div>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId} className="video-list__item">
            <VideoItem video={video} />
          </li>
        ))}
      </ul>
    </div>
  );
}
