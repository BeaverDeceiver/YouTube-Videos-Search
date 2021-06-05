import { configureStore } from '@reduxjs/toolkit';
import videoSearchReducer from './reducers/reducers';
import Saga from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = Saga();

export const store = configureStore({
  reducer: {
    videoSearch: videoSearchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
