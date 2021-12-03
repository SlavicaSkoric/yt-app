import axios from 'axios';

const KEY = 'AIzaSyAXUSroaTOI3FWvOH8_kdBB5LcEuxB0S_c';

//capitalized name because this is a variable not meant to change except if you know specifically what you are doing

//axios config object:
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
