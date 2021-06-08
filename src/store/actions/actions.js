import { createAction } from 'redux-actions';

export const listVideos = createAction('LIST_VIDEOS');

export const setStatus = createAction('SET_STATUS');

export const listMoreVideos = createAction('LIST_MORE_VIDEOS');

export const fetchVideos = createAction('FETCH_VIDEOS');

export const fetchMoreVideos = createAction('FETCH_MORE_VIDEOS');
