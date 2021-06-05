import axios from 'axios';

const API_KEY = 'AIzaSyB14DKGO5IjpR6XFqeuFhZbuktDa1F5lho';

export default axios.create({
  baseURL: ' https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: API_KEY,
  },
});
