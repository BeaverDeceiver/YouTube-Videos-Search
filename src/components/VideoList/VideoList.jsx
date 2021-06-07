import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VideoItem } from '../VideoItem/VideoItem';
import {
  selectQuery,
  selectStatus,
  selectVideos,
  selectVideosAmont,
} from '../../store/selectors/selectors';
import _ from 'lodash';
import { fetchVideos, setStatus } from '../../store/actions/actions';

export function VideoList() {
  const videos = useSelector(selectVideos);
  const query = useSelector(selectQuery);
  const videosAmount = useSelector(selectVideosAmont);
  const status = useSelector(selectStatus);

  const dispatch = useDispatch(fetchVideos);

  document.addEventListener('scroll', _.throttle(handleScroll, 200));

  function handleScroll(e) {
    let element = e.target.documentElement;

    if (
      status === 'idle' &&
      element.scrollHeight - element.scrollTop === element.clientHeight
    ) {
      dispatch(setStatus('busy'));
      dispatch(fetchVideos({ query, videosAmount, listMore: true }));
    }
  }

  return (
    <>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId} className="video-list__item">
            <VideoItem video={video} />
          </li>
        ))}
      </ul>
    </>
  );
}
