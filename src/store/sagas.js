import { all, put, takeEvery } from 'redux-saga/effects';

import { STATE_STATUS_IDLE } from '../constants/stateConstants';
import {
  MAX_RESULTS_DEFAULT,
  SEARCH_TYPE_VIDEO,
} from '../constants/searchConstants';

import youtube from '../apis/youtube';
// import dummy from '../apis/dummy';

import {
  listMoreVideos,
  listVideos,
  setStatus,
} from '../store/actions/actions';

export function* fetchVideos(action) {
  const { query } = action.payload;

  // const response = JSON.parse(dummy);
  const response = yield youtube.get('/search', {
    params: {
      q: query,
      type: SEARCH_TYPE_VIDEO,
      maxResults: MAX_RESULTS_DEFAULT,
    },
  });

  yield put(
    listVideos({
      items: response.data.items,
      query,
      nextPageToken: response.data.nextPageToken,
    })
  );
  yield put(setStatus({ status: STATE_STATUS_IDLE }));
}

export function* fetchMoreVideos(action) {
  const { query, nextPageToken } = action.payload;

  // const response = JSON.parse(dummy);
  const response = yield youtube.get('/search', {
    params: {
      q: query,
      type: SEARCH_TYPE_VIDEO,
      maxResults: MAX_RESULTS_DEFAULT,
      pageToken: nextPageToken,
    },
  });

  yield put(
    listMoreVideos({
      items: response.data.items,
      nextPageToken: response.data.nextPageToken,
    })
  );
  yield put(setStatus({ status: STATE_STATUS_IDLE }));
}

export function* watchFetchVideos() {
  yield takeEvery('FETCH_VIDEOS', fetchVideos);
}

export function* watchFetchMoreVideos() {
  yield takeEvery('FETCH_MORE_VIDEOS', fetchMoreVideos);
}

export default function* rootSaga() {
  yield all([watchFetchVideos(), watchFetchMoreVideos()]);
}
