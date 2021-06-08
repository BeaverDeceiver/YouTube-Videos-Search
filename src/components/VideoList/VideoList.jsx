import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VideoItem } from '../VideoItem/VideoItem';
import {
  selectQuery,
  selectStatus,
  selectVideos,
  selectNextPageToken,
} from '../../store/selectors/selectors';
import _ from 'lodash';
import { fetchMoreVideos, setStatus } from '../../store/actions/actions';
import { STATE_STATUS_BUSY } from '../../constants/stateConstants';

export function VideoList() {
  const videos = useSelector(selectVideos);
  const query = useSelector(selectQuery);
  const status = useSelector(selectStatus);
  const nextPageToken = useSelector(selectNextPageToken);

  const dispatch = useDispatch();

  function handleScroll(e) {
    let element = e.target;
    if (
      status === 'idle' &&
      element.scrollHeight - element.scrollTop === element.clientHeight
    ) {
      dispatch(setStatus({ status: STATE_STATUS_BUSY }));
      dispatch(fetchMoreVideos({ query, nextPageToken }));
    }
  }

  return (
    <>
      <ul onScroll={_.throttle(handleScroll, 100)}>
        {videos.map((video, index) => (
          <li key={video.id.videoId + index} className="video-list__item">
            <VideoItem video={video} />
          </li>
        ))}
      </ul>
    </>
  );
}
