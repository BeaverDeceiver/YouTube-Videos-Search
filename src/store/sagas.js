import { all, put, takeEvery } from 'redux-saga/effects';
import youtube from '../apis/youtube';
// import dummy from '../apis/dummy';

export function* fetchVideos(action) {
  const { query, videosAmount: maxResults, listMore } = action.payload;
  const response = yield youtube.get('/search', {
    params: {
      q: query,
      type: 'video',
      maxResults,
    },
  });
  // const response = JSON.parse(dummy);
  if (!listMore) {
    yield put({
      type: 'LIST_VIDEOS',
      payload: { items: response.data.items, query },
    });
  } else {
    yield put({
      type: 'LIST_MORE_VIDEOS',
      payload: { items: response.data.items },
    });
  }
  yield put({
    type: 'SET_STATUS',
    payload: { status: 'idle' },
  });
}

export function* watchFetchVideos() {
  yield takeEvery('FETCH_VIDEOS', fetchVideos);
}

export default function* rootSaga() {
  yield all([watchFetchVideos()]);
}
