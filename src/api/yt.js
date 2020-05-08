import axios from 'axios';

export const YEK = 'AIzaSyD1enKLMfyOIo9EOk_bvhSOnGy3fYpntRE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  
});

