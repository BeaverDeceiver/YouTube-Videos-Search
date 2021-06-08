import axios from 'axios';
import { SEARCH_PART_SNIPPET } from '../constants/searchConstants';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY_PRODUCTION;

export default axios.create({
  baseURL: ' https://www.googleapis.com/youtube/v3/',
  params: {
    part: SEARCH_PART_SNIPPET,
    key: API_KEY,
  },
});
