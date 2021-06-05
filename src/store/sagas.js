import { all, put, takeEvery } from 'redux-saga/effects';
import youtube from '../apis/youtube';

export function* searchVideos({ query, maxResults }) {
  const response = yield youtube.get('/search', {
    params: {
      q: query,
      type: 'video',
      maxResults,
    },
  });
  yield put({ type: 'LIST_VIDEOS', payload: { items: response.items } });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchSearchVideos() {
  yield takeEvery('LIST_VIDEOS', searchVideos);
}

export default function* rootSaga() {
  yield all([watchSearchVideos()]);
}
