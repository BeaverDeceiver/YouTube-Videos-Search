import { handleActions } from 'redux-actions';

import { listVideos } from '../actions/actions';

const defaultState = { listAmount: 0, videos: [] };

const videoSearch = handleActions(
  {
    [listVideos]: (state, action) => {
      return {
        listAmount: state.listAmount + 20,
        videos: action.payload.items,
      };
    },
  },
  defaultState
);

export default videoSearch;
