export function selectVideos(state) {
  return state.videoSearch.videos;
}

export function selectStatus(state) {
  return state.videoSearch.status;
}

export function selectVideosAmont(state) {
  return state.videoSearch.listAmount;
}

export function selectQuery(state) {
  return state.videoSearch.query;
}
