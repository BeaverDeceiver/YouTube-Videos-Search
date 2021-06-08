import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VideoItem } from '../VideoItem/VideoItem';
import {
  selectQuery,
  selectStatus,
  selectVideos,
} from '../../store/selectors/selectors';
import _ from 'lodash';
import { fetchMoreVideos, setStatus } from '../../store/actions/actions';
import { STATE_STATUS_BUSY } from '../../constants/stateConstants';

export function VideoList() {
  const videos = useSelector(selectVideos);
  const query = useSelector(selectQuery);
  const status = useSelector(selectStatus);

  const dispatch = useDispatch();

  function handleScroll(e) {
    let element = e.target;
    if (
      status === 'idle' &&
      element.scrollHeight - element.scrollTop === element.clientHeight
    ) {
      console.log('firing');
      console.log(`query: ${query}`);
      console.log(`status: ${status}`);
      dispatch(setStatus({ status: STATE_STATUS_BUSY }));
      dispatch(fetchMoreVideos({ query }));
      console.log(`status(more after): ${status}`);
    }
  }

  return (
    <>
      <ul onScroll={handleScroll}>
        {videos.map((video, index) => (
          <li key={video.id.videoId + index} className="video-list__item">
            <VideoItem video={video} />
          </li>
        ))}
      </ul>
    </>
  );
}
