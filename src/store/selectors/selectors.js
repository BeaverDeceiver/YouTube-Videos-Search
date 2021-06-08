export function selectVideos(state) {
  return state.videoSearch.videos;
}

export function selectStatus(state) {
  return state.videoSearch.status;
}

export function selectQuery(state) {
  return state.videoSearch.query;
}

export function selectNextPageToken(state) {
  return state.videoSearch.nextPageToken;
}
