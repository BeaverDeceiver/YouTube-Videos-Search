import { handleActions } from 'redux-actions';

import { listVideos, listMoreVideos, setStatus } from '../actions/actions';

const defaultState = { query: '', listAmount: 10, videos: [], status: 'idle' };

const videoSearch = handleActions(
  {
    [listVideos]: (state, action) => {
      return {
        query: action.payload.query,
        listAmount: 10,
        videos: action.payload.items,
      };
    },
    [listMoreVideos]: (state, action) => {
      return {
        ...state,
        listAmount: state.listAmount + 10,
        videos: action.payload.items,
      };
    },
    [setStatus]: (state, action) => {
      return {
        ...state,
        status: action.payload.status,
      };
    },
  },
  defaultState
);

export default videoSearch;
