const API_KEY = '1dca08d41c08ea718f87383d773568e2';

const requests = {
  fetchTrending: `/trend/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export default requests;
