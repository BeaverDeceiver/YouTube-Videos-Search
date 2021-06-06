import { all, put, takeEvery } from 'redux-saga/effects';
import youtube from '../apis/youtube';

export function* fetchVideos(action) {
  const { query, videosAmount: maxResults } = action.payload;
  const response = yield youtube.get('/search', {
    params: {
      q: query,
      type: 'video',
      maxResults,
    },
  });
  yield put({ type: 'LIST_VIDEOS', payload: { items: response.data.items } });
}

export function* watchFetchVideos() {
  yield takeEvery('FETCH_VIDEOS', fetchVideos);
}

export default function* rootSaga() {
  yield all([watchFetchVideos()]);
}
