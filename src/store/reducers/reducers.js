import { handleActions } from 'redux-actions';
import { STATE_STATUS_IDLE } from '../../constants/stateConstants';

import { listVideos, listMoreVideos, setStatus } from '../actions/actions';

const defaultState = {
  query: '',
  status: STATE_STATUS_IDLE,
  videos: [],
  nextPageToken: '',
};

const videoSearch = handleActions(
  {
    [listVideos]: (state, action) => {
      return {
        ...state,
        query: action.payload.query,
        videos: action.payload.items,
        nextPageToken: action.payload.nextPageToken,
      };
    },
    [listMoreVideos]: (state, action) => {
      return {
        ...state,
        videos: state.videos.concat(action.payload.items),
        nextPageToken: action.payload.nextPageToken,
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
